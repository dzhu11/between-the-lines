/* ============================================================
   This is the JavaScript! 
   It's the "brain" of the website that makes things happen.
============================================================ */

// 1. We find the elements on the page that we want to interact with
const reviewForm = document.getElementById('reviewForm');
const successMessage = document.getElementById('successMessage');
const submittedBook = document.getElementById('submittedBook');

// 2. We tell the website to listen for when someone clicks "Post Review"
reviewForm.addEventListener('submit', function(event) {
    
    // This stops the page from refreshing (which is the default for forms)
    event.preventDefault();
    
    // 3. We grab the name of the book the user typed in
    const bookTitleValue = document.getElementById('bookTitle').value;
    
    // 4. We show the "Thank You" message and hide the form
    submittedBook.textContent = bookTitleValue; // Put the book title in the message
    
    reviewForm.classList.add('hidden'); // Hide the form
    successMessage.classList.remove('hidden'); // Show the success message
    
    // In a real website, this is where we would send the data to a database!
    console.log("Review submitted for:", bookTitleValue);
});

// Extra: Smooth scrolling for the menu links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
