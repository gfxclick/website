// বই নির্বাচন করলে ফর্মে বইয়ের নাম অটোমেটিক সেট হয়ে যাওয়ার জন্য ফাংশন
function selectBook(bookName) {
    document.getElementById('book_name').value = bookName;
    document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
}

// ফর্ম সাবমিশন ট্র্যাকিং
let submitted = false;

// ফর্ম সাবমিট হলে কনফার্মেশন মেসেজ দেখানোর ফাংশন
function showConfirmation() {
    if (submitted) {
        document.getElementById('google-order-form').style.display = 'none';
        document.getElementById('success-message').style.display = 'block';
    }
}
