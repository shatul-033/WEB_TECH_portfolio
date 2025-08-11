 document.addEventListener('DOMContentLoaded', function() {
            const themeButtons = document.querySelectorAll('.theme-button');
            themeButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const colors = this.getAttribute('data-color').split(',');
                    document.documentElement.style.setProperty('--theme-color-1', colors[0]);
                    document.documentElement.style.setProperty('--theme-color-2', colors[1]);
                });
            });
        });