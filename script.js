// Handle Review Submission
const reviewForm = document.getElementById('reviewForm');
const successMessage = document.getElementById('successMessage');

if (reviewForm) {
    reviewForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Hide form and show success
        reviewForm.classList.add('hidden');
        successMessage.classList.remove('hidden');
        
        // In a real multi-page site, you'd send this to a server.
        // For now, we'll just log it to the console.
        const title = document.getElementById('bookTitle').value;
        console.log("Review submitted for:", title);
    });
}
