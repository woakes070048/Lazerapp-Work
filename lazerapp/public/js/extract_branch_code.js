frappe.ui.form.on(cur_frm.doctype, {
    company(frm) {
        // Run only if both fields exist
        if (frm.doc.company && frm.fields_dict.custom_branch_code) {
            let company_name = frm.doc.company.trim();
            
            // Extract last number in the company name
            let match = company_name.match(/(\d+)$/);
            let branch_number = match ? match[1] : "";

            // Set the branch code
            frm.set_value("custom_branch_code", branch_number);

            // Log result for debugging
            console.log(`Extracted Branch Code: ${branch_number}`);
        }
    },

    validate(frm) {
        // Ensure branch code is updated before save
        if (frm.doc.company && frm.fields_dict.custom_branch_code) {
            let company_name = frm.doc.company.trim();
            let match = company_name.match(/(\d+)$/);
            let branch_number = match ? match[1] : "";
            frm.set_value("custom_branch_code", branch_number);
        }
    }
});
