/**
 * PRAGEETH P. — WHATSAPP ENQUIRY GENERATOR
 * Formats structured project estimates into clean, readable WhatsApp messages.
 */

const WhatsAppService = {
  buildMessage(calculation, clientInfo) {
    const lines = [];

    lines.push("⚡ NEW PROJECT ENQUIRY — PRAGEETH P.");
    lines.push("━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    lines.push("");

    // 1. Client Details
    lines.push("👤 CLIENT DETAILS");
    lines.push(`• Name: ${clientInfo.name || "Not provided"}`);
    lines.push(`• WhatsApp: ${clientInfo.fullPhone || "Not provided"}`);
    if (clientInfo.email && clientInfo.email.trim()) {
      lines.push(`• Email: ${clientInfo.email.trim()}`);
    }
    lines.push("");

    // 2. Project Details
    lines.push("📐 PROJECT DETAILS");
    lines.push(`• Service: ${calculation.serviceName}`);
    lines.push(`• Quantity: ${calculation.quantity} ${calculation.unitLabel}${calculation.quantity > 1 ? "s" : ""}`);
    
    if (calculation.customFields && calculation.customFields.length > 0) {
      calculation.customFields.forEach(cf => {
        lines.push(`• ${cf.label}`);
      });
    }

    if (calculation.addOns && calculation.addOns.length > 0) {
      const addonsStr = calculation.addOns.map(a => a.label).join(", ");
      lines.push(`• Add-ons: ${addonsStr}`);
    } else {
      lines.push("• Add-ons: None");
    }

    lines.push(`• Delivery: ${calculation.delivery.name} (${calculation.delivery.subtitle})`);
    if (calculation.preferredDate) {
      lines.push(`• Target Date: ${calculation.preferredDate}`);
    }
    lines.push("");

    // 3. Price Breakdown
    lines.push("💰 PRICE BREAKDOWN");
    lines.push(`• Unit Rate: ${calculation.formattedUnitPrice} / ${calculation.unitLabel}`);
    if (calculation.addOnsTotal > 0) {
      lines.push(`• Add-ons Total: ${calculation.formattedAddOnsTotal}`);
    }
    if (calculation.deliveryFee > 0) {
      lines.push(`• Priority Delivery Fee: ${PRICING_CONFIG.formatCurrency(calculation.deliveryFee)}`);
    }
    lines.push(`• ESTIMATED TOTAL: ${calculation.formattedGrandTotal}`);
    lines.push("");

    // 4. Project Description / Brief
    if (clientInfo.description && clientInfo.description.trim()) {
      lines.push("📝 PROJECT BRIEF & NOTES");
      lines.push(clientInfo.description.trim());
      lines.push("");
    }

    lines.push("━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    lines.push("Sent via prageeth.design/estimator");

    return lines.join("\n");
  },

  generateWhatsAppUrl(calculation, clientInfo) {
    const rawText = this.buildMessage(calculation, clientInfo);
    const encodedText = encodeURIComponent(rawText);
    const phone = PRICING_CONFIG.whatsappNumber;
    return `https://wa.me/${phone}?text=${encodedText}`;
  },

  buildWhatsAppUrl(calculation, clientInfo) {
    return this.generateWhatsAppUrl(calculation, clientInfo);
  },

  sendEnquiry(calculation, clientInfo) {
    const url = this.generateWhatsAppUrl(calculation, clientInfo);
    window.open(url, '_blank', 'noopener,noreferrer');
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = WhatsAppService;
}
