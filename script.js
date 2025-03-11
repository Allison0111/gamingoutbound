// Prevent zooming
window.addEventListener("wheel", (e)=> {
  const isPinching = e.ctrlKey;
  if(isPinching) e.preventDefault();
}, { passive: false });

document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Navigation functionality
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    const gameSection = document.getElementById('games-section');
    const publishersSection = document.getElementById('publishers-section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(item => {
                item.classList.remove('border-black');
                item.classList.add('border-transparent');
            });
            
            // Add active class to clicked link
            link.classList.add('border-black');
            link.classList.remove('border-transparent');
            
            // Hide mobile menu after click
            if (mobileMenu) {
                mobileMenu.classList.add('hidden');
            }
            
            // Show appropriate section
            const section = link.getAttribute('data-section');
            if (section === 'games') {
                gameSection.classList.remove('hidden');
                publishersSection.classList.add('hidden');
            } else if (section === 'publishers') {
                publishersSection.classList.remove('hidden');
                gameSection.classList.add('hidden');
            }
        });
    });

    // Game categories filtering
    const sonyFilter = document.getElementById('sony-filter');
    const potentialFilter = document.getElementById('potential-filter');
    const watchingFilter = document.getElementById('watching-filter');
    
    const gamesContent = document.getElementById('games-content');
    const potentialContent = document.getElementById('potential-content');
    const watchingContent = document.getElementById('watching-content');

    function setActiveCategory(button) {
        [sonyFilter, potentialFilter, watchingFilter].forEach(btn => {
            btn.classList.remove('active-category');
        });
        button.classList.add('active-category');
    }

    if (sonyFilter) {
        sonyFilter.addEventListener('click', () => {
            setActiveCategory(sonyFilter);
            gamesContent.classList.remove('hidden');
            potentialContent.classList.add('hidden');
            watchingContent.classList.add('hidden');
        });
    }

    if (potentialFilter) {
        potentialFilter.addEventListener('click', () => {
            setActiveCategory(potentialFilter);
            gamesContent.classList.add('hidden');
            potentialContent.classList.remove('hidden');
            watchingContent.classList.add('hidden');
        });
    }

    if (watchingFilter) {
        watchingFilter.addEventListener('click', () => {
            setActiveCategory(watchingFilter);
            gamesContent.classList.add('hidden');
            potentialContent.classList.add('hidden');
            watchingContent.classList.remove('hidden');
        });
    }

    // Publishers categories filtering
    const domesticFilter = document.getElementById('domestic-filter');
    const overseasFilter = document.getElementById('overseas-filter');
    
    const domesticContent = document.getElementById('domestic-content');
    const overseasContent = document.getElementById('overseas-content');

    function setActivePublisherCategory(button) {
        [domesticFilter, overseasFilter].forEach(btn => {
            if (btn) btn.classList.remove('active-publisher-category');
        });
        button.classList.add('active-publisher-category');
    }

    if (domesticFilter) {
        domesticFilter.addEventListener('click', () => {
            setActivePublisherCategory(domesticFilter);
            domesticContent.classList.remove('hidden');
            overseasContent.classList.add('hidden');
        });
    }

    if (overseasFilter) {
        overseasFilter.addEventListener('click', () => {
            setActivePublisherCategory(overseasFilter);
            domesticContent.classList.add('hidden');
            overseasContent.classList.remove('hidden');
        });
    }

    // Game details toggle
    const detailsToggles = document.querySelectorAll('.details-toggle');
    
    detailsToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            // Find parent game card and its details content
            const gameCard = toggle.closest('.game-card');
            const detailsContent = gameCard.querySelector('.details-content');
            
            // Toggle visibility and text
            detailsContent.classList.toggle('hidden');
            toggle.classList.toggle('active');
            
            // Change button text based on state
            if (detailsContent.classList.contains('hidden')) {
                toggle.innerHTML = '查看详情 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1"><polyline points="6 9 12 15 18 9"></polyline></svg>';
            } else {
                toggle.innerHTML = '收起详情 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1"><polyline points="18 15 12 9 6 15"></polyline></svg>';
            }
        });
    });
});
