document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('userLogo').addEventListener('click', toggleDropdown);
    
    //Visibility event
        function toggleDropdown(event) {
            event.preventDefault(); //Disable link on default
            const dropdownMenu = document.getElementById('dropdownMenu');            
            //Toggle classList attribute
            dropdownMenu.classList.toggle('show');
        }
        
        //Add listener to close dropdown when clicked outside of its area
        window.addEventListener('click', function(event) {
            const dropdownMenu = document.getElementById('dropdownMenu');
            const userLogo = document.getElementById('userLogo');
    
            //Boolean logic check if click was outside of dropdown menu area
            if (!userLogo.contains(event.target) && !dropdownMenu.contains(event.target)) {
                //Remove classList attribute on successfull boolean check
                dropdownMenu.classList.remove('show');
            }
    });
});