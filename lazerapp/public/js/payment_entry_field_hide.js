frappe.ui.form.on("Payment Entry", {
    mode_of_payment: function (frm) {
        // Check the selected mode
        if (frm.doc.mode_of_payment === "Bank Transfer") {
            // Show relevant fields
            frm.set_df_property("company_bank_account", "hidden", 0);
            frm.set_df_property("party_bank_account", "hidden", 0);
            frm.set_df_property("contact", "hidden", 0);
        } else {
            // Hide these fields for other payment modes
            frm.set_df_property("company_bank_account", "hidden", 1);
            frm.set_df_property("party_bank_account", "hidden", 1);
            frm.set_df_property("contact", "hidden", 1);
        }
    },

    onload: function (frm) {
        // Ensure correct visibility when form loads
        if (frm.doc.mode_of_payment === "Bank Transfer") {
            frm.set_df_property("company_bank_account", "hidden", 0);
            frm.set_df_property("party_bank_account", "hidden", 0);
            frm.set_df_property("contact", "hidden", 0);
        } else {
            frm.set_df_property("company_bank_account", "hidden", 1);
            frm.set_df_property("party_bank_account", "hidden", 1);
            frm.set_df_property("contact", "hidden", 1);
        }
    }
});
