function about () {
    const cntnr = document.querySelector('#content');

    const aboutImg = document.createElement('img');
    aboutImg.src = "https://lh3.googleusercontent.com/Nu8dSc3lJmWX2xOhvGsv1r2uQZ1lePrNUPOLtt60IaUz2suaQFBQyE4Q8-0to1VK73ARBnUwBi4AeiGzjRakXybAKowZRliHOdbtcHszdzkDsDtciwq_Yh2oWOmBo0p3wWwuUQ1jwWZlb92wX01kv_lFauDMYDvwuS_yd-FNi83lisiS8us6zy2T2Z73j5LnRD3dZpR0vyDZkA80iUKCmD66U0WnWLCr8brMz5Kk6ndcqoy2PycFjPnPtW4koCdsohPVHyG4uErN9lyTAFug9W2B2W0oDuf4D2QReVB-MYMPtVwMogXEsnJkzeyHEurmp8q0pDkDq2j_cLElVxEWpO9uHhkhB6GSA3CPk-rQJmsAsP9Szv32k-IvYN5DcN-U-ehvHKVc6ImPL4n8JJ2cSPPK0lNciY0I9dyrjVKjYo60imsCna8F-FHYbVPKRiZjJ2Mw35RD_tiCvfylZoynqihAH1zpBVp9uR4nHt-T5tZcR-hx5jQF_OsAW9Ze1PLV65lVtSkpyvg7W3k7PE_gDZVuzajw9IJFpGZ9BVNkNvGSlqm46Jj3SaDoYyY6vofmvNzOFi7o_kswaUi4t6wsiOsnxl_nG1HqJ8Z3YABzeWDPz5WGPESjOjTkyzXIgj086RsK_aG69RZVyTuckJ_Zg-BQMffjFxC6CbkVnzKQES-648pDiLt_-rRgbdo8=w799-h596-no?authuser=0";
    cntnr.appendChild(aboutImg);

    const aboutText = document.createElement('p');
    aboutText.innerHTML = "a small eatery in a small german street, serving the freshest produce on the most mediocre porcelain available";
    cntnr.appendChild(aboutText);
}

export default about;