frappe.ui.form.on("Payment Entry", {
    mode_of_payment: function (frm) {
        toggle_payment_fields(frm);
    },

    onload: function (frm) {
        toggle_payment_fields(frm);
    }
});

function toggle_payment_fields(frm) {
    if (frm.doc.mode_of_payment === "Bank Transfer") {
        // Show bank-related fields
        frm.set_df_property("company_bank_account", "hidden", 0);
        frm.set_df_property("party_bank_account", "hidden", 0);
        frm.set_df_property("contact", "hidden", 0);

        // Hide cheque-related fields
        frm.set_df_property("cheque_reference_no", "hidden", 1);
        frm.set_df_property("clearance_date", "hidden", 1);
        frm.set_df_property("cheque_reference_date", "hidden", 1);
    } else {
        // Hide bank-related fields
        frm.set_df_property("company_bank_account", "hidden", 1);
        frm.set_df_property("party_bank_account", "hidden", 1);
        frm.set_df_property("contact", "hidden", 1);

        // Show cheque-related fields
        frm.set_df_property("cheque_reference_no", "hidden", 0);
        frm.set_df_property("clearance_date", "hidden", 0);
        frm.set_df_property("cheque_reference_date", "hidden", 0);
    }
}
