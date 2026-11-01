/**
 * PRAGEETH P. — ESTIMATOR UI CONTROLLER
 * Drives the 4-step wizard, dynamic options, live estimate panels, and WhatsApp dispatch.
 */

class EstimatorUI {
  constructor() {
    this.engine = new EstimatorEngine(PRICING_CONFIG);
    this.currentStep = 1;

    // Elements
    this.stepperItems = document.querySelectorAll('.stepper-item');
    this.stepPanes = document.querySelectorAll('.estimator-step-pane');
    this.servicesGrid = document.getElementById('services-grid');
    this.dynamicDetailsContainer = document.getElementById('dynamic-details-container');
    this.deliveryContainer = document.getElementById('delivery-options-container');
    this.summaryTableContainer = document.getElementById('summary-table-container');

    // Right Panels
    this.estimateService = document.getElementById('est-service-name');
    this.estimateUnitPrice = document.getElementById('est-unit-price');
    this.estimateQuantity = document.getElementById('est-quantity');
    this.estimateDynamicLines = document.getElementById('est-dynamic-lines');
    this.estimateGrandTotal = document.getElementById('est-grand-total');

    // Form
    this.enquiryForm = document.getElementById('estimator-enquiry-form');
    this.clientNameInput = document.getElementById('client-name');
    this.clientPhoneInput = document.getElementById('client-phone');
    this.countryCodeSelect = document.getElementById('country-code');
    this.clientEmailInput = document.getElementById('client-email');
    this.clientNotesInput = document.getElementById('client-notes');

    this.init();
  }

  init() {
    this.renderServiceCards();
    this.renderDeliveryOptions();
    this.bindEvents();
    
    // Subscribe to engine state changes
    this.engine.subscribe((calculation) => {
      this.updateLiveEstimate(calculation);
      this.renderSummaryTable(calculation);
    });

    // Initial render
    this.engine.notify();
    this.renderDynamicDetails();
  }

  // Render 9 Service Cards
  renderServiceCards() {
    if (!this.servicesGrid) return;
    this.servicesGrid.innerHTML = '';

    PRICING_CONFIG.services.forEach(service => {
      const isSelected = service.id === this.engine.selectedService.id;
      const card = document.createElement('div');
      card.className = `service-select-card ${isSelected ? 'selected' : ''}`;
      card.setAttribute('data-service-id', service.id);
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');

      card.innerHTML = `
        <div class="service-card-check">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <div class="service-card-icon">
          ${service.iconSvg}
        </div>
        <h4 class="service-card-name">${service.name}</h4>
        <p class="service-card-price">${service.startingPriceDisplay}</p>
      `;

      card.addEventListener('click', () => {
        this.selectService(service.id);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.selectService(service.id);
        }
      });

      this.servicesGrid.appendChild(card);
    });
  }

  selectService(serviceId) {
    this.engine.setService(serviceId);
    
    // Update active classes on cards
    document.querySelectorAll('.service-select-card').forEach(c => {
      if (c.getAttribute('data-service-id') === serviceId) {
        c.classList.add('selected');
      } else {
        c.classList.remove('selected');
      }
    });

    this.renderDynamicDetails();
  }

  // Render Step 2: Dynamic Fields (Quantity, Options, Add-ons)
  renderDynamicDetails() {
    if (!this.dynamicDetailsContainer) return;
    const s = this.engine.selectedService;
    this.dynamicDetailsContainer.innerHTML = '';

    const wrap = document.createElement('div');
    wrap.className = 'step-details-group';

    // 1. Quantity Counter
    const qtyBlock = document.createElement('div');
    qtyBlock.className = 'detail-control-block';
    qtyBlock.innerHTML = `
      <label class="detail-control-label">Quantity (${s.unit}s)</label>
      <div class="quantity-counter-wrap">
        <button type="button" class="qty-btn" id="qty-minus" aria-label="Decrease quantity">−</button>
        <span class="qty-value" id="qty-display">${this.engine.quantity}</span>
        <button type="button" class="qty-btn" id="qty-plus" aria-label="Increase quantity">+</button>
        <span class="qty-unit-label">${s.unit}${this.engine.quantity > 1 ? 's' : ''}</span>
      </div>
    `;

    qtyBlock.querySelector('#qty-minus').addEventListener('click', () => {
      this.engine.decrementQuantity();
      document.getElementById('qty-display').textContent = this.engine.quantity;
    });

    qtyBlock.querySelector('#qty-plus').addEventListener('click', () => {
      this.engine.incrementQuantity();
      document.getElementById('qty-display').textContent = this.engine.quantity;
    });

    wrap.appendChild(qtyBlock);

    // 2. Custom Fields (Dropdowns / Radios)
    if (s.customFields && s.customFields.length > 0) {
      s.customFields.forEach(field => {
        const fieldBlock = document.createElement('div');
        fieldBlock.className = 'detail-control-block';

        const label = document.createElement('label');
        label.className = 'detail-control-label';
        label.textContent = field.label;
        fieldBlock.appendChild(label);

        const select = document.createElement('select');
        select.className = 'detail-select-input';
        field.options.forEach((opt, idx) => {
          const optEl = document.createElement('option');
          optEl.value = idx;
          const pricePart = opt.price > 0 ? ` (+${PRICING_CONFIG.formatCurrency(opt.price)})` : '';
          optEl.textContent = `${opt.label}${pricePart}`;
          select.appendChild(optEl);
        });

        select.addEventListener('change', (e) => {
          this.engine.setCustomField(field.id, parseInt(e.target.value, 10));
        });

        fieldBlock.appendChild(select);
        wrap.appendChild(fieldBlock);
      });
    }

    // 3. Add-ons Checklist
    if (s.addOns && s.addOns.length > 0) {
      const addonsBlock = document.createElement('div');
      addonsBlock.className = 'detail-control-block';
      addonsBlock.innerHTML = `<label class="detail-control-label">Project Enhancements & Add-ons</label>`;

      const list = document.createElement('div');
      list.className = 'addons-checklist';

      s.addOns.forEach(addon => {
        const isChecked = this.engine.selectedAddOns.has(addon.id);
        const item = document.createElement('div');
        item.className = `addon-check-card ${isChecked ? 'checked' : ''}`;
        item.setAttribute('role', 'checkbox');
        item.setAttribute('aria-checked', isChecked ? 'true' : 'false');
        item.setAttribute('tabindex', '0');

        item.innerHTML = `
          <div class="addon-left">
            <div class="custom-checkbox">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <span class="addon-label">${addon.label}</span>
          </div>
          <span class="addon-price-badge">+${PRICING_CONFIG.formatCurrency(addon.price)}</span>
        `;

        const toggle = () => {
          this.engine.toggleAddOn(addon.id);
          const checked = this.engine.selectedAddOns.has(addon.id);
          item.classList.toggle('checked', checked);
          item.setAttribute('aria-checked', checked ? 'true' : 'false');
        };

        item.addEventListener('click', toggle);
        item.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggle();
          }
        });

        list.appendChild(item);
      });

      addonsBlock.appendChild(list);
      wrap.appendChild(addonsBlock);
    }

    this.dynamicDetailsContainer.appendChild(wrap);
  }

  // Render Step 3: Delivery Options
  renderDeliveryOptions() {
    if (!this.deliveryContainer) return;
    this.deliveryContainer.innerHTML = '';

    const grid = document.createElement('div');
    grid.className = 'delivery-options-grid';

    PRICING_CONFIG.deliveryTiers.forEach(tier => {
      const isSelected = tier.id === this.engine.selectedDelivery.id;
      const card = document.createElement('div');
      card.className = `delivery-card ${isSelected ? 'selected' : ''}`;
      card.setAttribute('data-tier-id', tier.id);
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');

      card.innerHTML = `
        <div>
          <h4 class="delivery-card-title">${tier.name}</h4>
          <p class="delivery-card-subtitle">${tier.subtitle} — ${tier.description}</p>
        </div>
        <span class="delivery-card-price">${tier.price === 0 ? 'Included' : '+' + PRICING_CONFIG.formatCurrency(tier.price)}</span>
      `;

      card.addEventListener('click', () => {
        this.engine.setDelivery(tier.id);
        document.querySelectorAll('.delivery-card').forEach(c => {
          c.classList.toggle('selected', c.getAttribute('data-tier-id') === tier.id);
        });
      });

      grid.appendChild(card);
    });

    this.deliveryContainer.appendChild(grid);
  }

  // Render Step 4: Summary Table
  renderSummaryTable(calculation) {
    if (!this.summaryTableContainer) return;
    this.summaryTableContainer.innerHTML = '';

    const table = document.createElement('div');
    table.className = 'summary-review-table';

    let html = `
      <div class="summary-row">
        <span class="summary-row-label">Selected Service</span>
        <span class="summary-row-val">${calculation.serviceName}</span>
      </div>
      <div class="summary-row">
        <span class="summary-row-label">Scope & Quantity</span>
        <span class="summary-row-val">${calculation.quantity} ${calculation.unitLabel}${calculation.quantity > 1 ? 's' : ''} @ ${calculation.formattedUnitPrice}</span>
      </div>
    `;

    if (calculation.customFields && calculation.customFields.length > 0) {
      calculation.customFields.forEach(cf => {
        html += `
          <div class="summary-row">
            <span class="summary-row-label">${cf.label}</span>
            <span class="summary-row-val">+${PRICING_CONFIG.formatCurrency(cf.price)}</span>
          </div>
        `;
      });
    }

    if (calculation.addOns && calculation.addOns.length > 0) {
      calculation.addOns.forEach(addon => {
        html += `
          <div class="summary-row">
            <span class="summary-row-label">Add-on: ${addon.label}</span>
            <span class="summary-row-val">+${PRICING_CONFIG.formatCurrency(addon.price)}</span>
          </div>
        `;
      });
    }

    html += `
      <div class="summary-row">
        <span class="summary-row-label">Delivery Timeline</span>
        <span class="summary-row-val">${calculation.delivery.name} (${calculation.delivery.price === 0 ? 'Included' : '+' + PRICING_CONFIG.formatCurrency(calculation.delivery.price)})</span>
      </div>
      <div class="summary-row total-row">
        <span class="summary-row-label">Total Estimated Investment</span>
        <span class="summary-row-val">${calculation.formattedGrandTotal}</span>
      </div>
    `;

    table.innerHTML = html;
    this.summaryTableContainer.appendChild(table);
  }

  // Update Right Panel A: Live Estimate
  updateLiveEstimate(calc) {
    if (this.estimateService) this.estimateService.textContent = calc.serviceName;
    if (this.estimateUnitPrice) this.estimateUnitPrice.textContent = `${calc.formattedUnitPrice} / ${calc.unitLabel}`;
    if (this.estimateQuantity) this.estimateQuantity.textContent = calc.quantity;

    if (this.estimateDynamicLines) {
      this.estimateDynamicLines.innerHTML = '';
      
      if (calc.customFields && calc.customFields.length > 0) {
        calc.customFields.forEach(cf => {
          const row = document.createElement('div');
          row.className = 'estimate-line-item';
          row.innerHTML = `
            <span class="estimate-line-label">${cf.label}</span>
            <span class="estimate-line-val">+${PRICING_CONFIG.formatCurrency(cf.price)}</span>
          `;
          this.estimateDynamicLines.appendChild(row);
        });
      }

      if (calc.addOns && calc.addOns.length > 0) {
        calc.addOns.forEach(addon => {
          const row = document.createElement('div');
          row.className = 'estimate-line-item';
          row.innerHTML = `
            <span class="estimate-line-label">${addon.label}</span>
            <span class="estimate-line-val">+${PRICING_CONFIG.formatCurrency(addon.price)}</span>
          `;
          this.estimateDynamicLines.appendChild(row);
        });
      }

      if (calc.deliveryFee > 0) {
        const row = document.createElement('div');
        row.className = 'estimate-line-item';
        row.innerHTML = `
          <span class="estimate-line-label">Priority Delivery</span>
          <span class="estimate-line-val">+${PRICING_CONFIG.formatCurrency(calc.deliveryFee)}</span>
        `;
        this.estimateDynamicLines.appendChild(row);
      }
    }

    if (this.estimateGrandTotal) {
      this.estimateGrandTotal.textContent = calc.formattedGrandTotal;
    }
  }

  // Step Wizard Navigation
  goToStep(stepNum) {
    if (stepNum < 1 || stepNum > 4) return;
    this.currentStep = stepNum;

    // Update stepper tabs
    this.stepperItems.forEach((btn, idx) => {
      const step = idx + 1;
      btn.classList.toggle('active', step === stepNum);
      btn.classList.toggle('completed', step < stepNum);
    });

    // Update step panes
    this.stepPanes.forEach(pane => {
      const pStep = parseInt(pane.getAttribute('data-step'), 10);
      pane.classList.toggle('active', pStep === stepNum);
    });

    // If moving to step 2, ensure dynamic details are rendered
    if (stepNum === 2) {
      this.renderDynamicDetails();
    }

    // Scroll center panel into view on mobile
    if (window.innerWidth <= 768) {
      const calcPanel = document.querySelector('.estimator-col-calculator');
      if (calcPanel) calcPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Bind Listeners
  bindEvents() {
    // Stepper header clicks
    this.stepperItems.forEach(item => {
      item.addEventListener('click', () => {
        const step = parseInt(item.getAttribute('data-step'), 10);
        this.goToStep(step);
      });
    });

    // Next / Back buttons
    document.querySelectorAll('[data-action="next-step"]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.goToStep(this.currentStep + 1);
      });
    });

    document.querySelectorAll('[data-action="prev-step"]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.goToStep(this.currentStep - 1);
      });
    });

    document.querySelectorAll('[data-action="jump-step"]').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = parseInt(btn.getAttribute('data-target-step'), 10);
        this.goToStep(target);
      });
    });

    // Panel B Form Validation & WhatsApp Submission
    if (this.enquiryForm) {
      this.enquiryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleEnquirySubmission();
      });
    }
  }

  handleEnquirySubmission() {
    let isValid = true;
    const name = this.clientNameInput.value.trim();
    const phone = this.clientPhoneInput.value.trim();
    const countryCode = this.countryCodeSelect.value;
    const email = this.clientEmailInput.value.trim();
    const notes = this.clientNotesInput.value.trim();

    // Reset error states
    document.querySelectorAll('.form-field-group').forEach(fg => fg.classList.remove('has-error'));

    if (!name) {
      this.clientNameInput.classList.add('invalid');
      this.clientNameInput.closest('.form-field-group')?.classList.add('has-error');
      isValid = false;
    } else {
      this.clientNameInput.classList.remove('invalid');
    }

    if (!phone || phone.length < 8) {
      this.clientPhoneInput.classList.add('invalid');
      this.clientPhoneInput.closest('.form-field-group')?.classList.add('has-error');
      isValid = false;
    } else {
      this.clientPhoneInput.classList.remove('invalid');
    }

    if (!notes) {
      this.clientNotesInput.classList.add('invalid');
      this.clientNotesInput.closest('.form-field-group')?.classList.add('has-error');
      isValid = false;
    } else {
      this.clientNotesInput.classList.remove('invalid');
    }

    if (!isValid) return;

    const fullPhone = `${countryCode} ${phone}`;
    const clientInfo = {
      name,
      phone,
      fullPhone,
      email,
      description: notes
    };

    const calculation = this.engine.getCalculation();
    WhatsAppService.sendEnquiry(calculation, clientInfo);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.estimatorApp = new EstimatorUI();
});
