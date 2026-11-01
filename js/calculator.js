/**
 * PRAGEETH P. — PROJECT COST ESTIMATOR ENGINE
 * Handles state, arithmetic calculations, and structured summary objects.
 */

class EstimatorEngine {
  constructor(config = PRICING_CONFIG) {
    this.config = config;
    this.selectedService = config.services[0]; // default: Poster Design
    this.quantity = this.selectedService.defaultQuantity || 1;
    this.customFieldValues = {};
    this.selectedAddOns = new Set();
    this.selectedDelivery = config.deliveryTiers[0]; // standard
    this.preferredDate = "";
    this.listeners = [];

    this.initDefaultFieldValues();
  }

  initDefaultFieldValues() {
    this.customFieldValues = {};
    this.selectedAddOns.clear();
    
    if (this.selectedService.customFields) {
      this.selectedService.customFields.forEach(field => {
        if (field.options && field.options.length > 0) {
          this.customFieldValues[field.id] = field.options[0];
        }
      });
    }
  }

  subscribe(callback) {
    if (typeof callback === 'function') {
      this.listeners.push(callback);
    }
  }

  notify() {
    const state = this.getCalculation();
    this.listeners.forEach(fn => fn(state, this));
  }

  setService(serviceId) {
    const found = this.config.services.find(s => s.id === serviceId);
    if (!found) return;

    this.selectedService = found;
    this.quantity = found.defaultQuantity || 1;
    this.initDefaultFieldValues();
    this.notify();
  }

  setQuantity(qty) {
    const min = this.selectedService.minQuantity || 1;
    const max = this.selectedService.maxQuantity || 50;
    const val = Math.max(min, Math.min(max, parseInt(qty, 10) || min));
    this.quantity = val;
    this.notify();
  }

  incrementQuantity() {
    this.setQuantity(this.quantity + 1);
  }

  decrementQuantity() {
    this.setQuantity(this.quantity - 1);
  }

  setCustomField(fieldId, optionIndex) {
    if (!this.selectedService.customFields) return;
    const field = this.selectedService.customFields.find(f => f.id === fieldId);
    if (field && field.options && field.options[optionIndex]) {
      this.customFieldValues[fieldId] = field.options[optionIndex];
      this.notify();
    }
  }

  toggleAddOn(addonId) {
    if (this.selectedAddOns.has(addonId)) {
      this.selectedAddOns.delete(addonId);
    } else {
      this.selectedAddOns.add(addonId);
    }
    this.notify();
  }

  setDelivery(tierId) {
    const tier = this.config.deliveryTiers.find(t => t.id === tierId);
    if (tier) {
      this.selectedDelivery = tier;
      this.notify();
    }
  }

  setPreferredDate(dateStr) {
    this.preferredDate = dateStr;
    this.notify();
  }

  getCalculation() {
    const s = this.selectedService;
    let unitBase = s.basePrice;

    // Additional scope fees that affect the unit price
    const customBreakdown = [];
    if (s.customFields) {
      s.customFields.forEach(f => {
        const selectedOpt = this.customFieldValues[f.id];
        if (selectedOpt && selectedOpt.price > 0) {
          // If it's a tier replacement, or an addition
          if (f.id === 'logoTier' || f.id === 'identityPackage') {
            unitBase = selectedOpt.price;
          } else {
            customBreakdown.push({
              label: `${f.label}: ${selectedOpt.label}`,
              price: selectedOpt.price
            });
          }
        }
      });
    }

    // Multiply unit price by quantity
    const customFieldsTotal = customBreakdown.reduce((sum, item) => sum + item.price, 0);
    const subtotalService = (unitBase + customFieldsTotal) * this.quantity;

    // Add-ons breakdown
    const addOnsBreakdown = [];
    if (s.addOns) {
      s.addOns.forEach(addon => {
        if (this.selectedAddOns.has(addon.id)) {
          addOnsBreakdown.push({
            id: addon.id,
            label: addon.label,
            price: addon.price
          });
        }
      });
    }
    const addOnsTotal = addOnsBreakdown.reduce((sum, item) => sum + item.price, 0);

    // Delivery fee
    const deliveryFee = this.selectedDelivery.price || 0;

    // Total computation
    const grandTotal = subtotalService + addOnsTotal + deliveryFee;

    return {
      service: s,
      serviceId: s.id,
      serviceName: s.name,
      pricingType: s.pricingType,
      unitPrice: unitBase,
      formattedUnitPrice: this.config.formatCurrency(unitBase),
      quantity: this.quantity,
      unitLabel: s.unit,
      customFields: customBreakdown,
      addOns: addOnsBreakdown,
      addOnsTotal,
      formattedAddOnsTotal: this.config.formatCurrency(addOnsTotal),
      delivery: this.selectedDelivery,
      deliveryFee,
      preferredDate: this.preferredDate,
      grandTotal,
      formattedGrandTotal: this.config.formatCurrency(grandTotal)
    };
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = EstimatorEngine;
}
