$(document).ready(function () {
    // Function to add bounce-effect class
    function addBounceEffect() {
        $(".copied").addClass("bounce-effect");
    }

    // Function to remove bounce-effect class
    function removeBounceEffect() {
        $(".copied").removeClass("bounce-effect");
    }

    // Click event handler for .copy-btn
    $(".copy-btn").click(function () {
        $('#textField').select(); // Select the text inside #textField
        document.execCommand("copy"); // Copy the selected text to clipboard
        
        // Show "Copied!" message
        $(".copied").text("Copied!");
        
        // Add bounce-effect class and remove after animation
        addBounceEffect();
        setTimeout(function () {
            removeBounceEffect();
            $(".copied").text(""); // Clear the text after animation
        }, 800); // Adjust timing as needed
    });
});
