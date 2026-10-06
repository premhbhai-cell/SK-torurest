(function() {
    setTimeout(function() {
        const style = document.createElement('style');
        style.innerHTML = `
            #wa-direct-btn { 
                position: fixed; 
                bottom: 90px; 
                right: 20px; 
                color: white; 
                border-radius: 50px; 
                cursor: pointer; 
                font-family: Arial, sans-serif;
                font-weight: bold; 
                text-decoration: none;
                box-shadow: 0 4px 10px rgba(0,0,0,0.3); 
                display: flex;
                align-items: center;
                gap: 8px;
                z-index: 10000;
                transition: transform 0.2s;
            }
            #wa-direct-btn:hover { transform: scale(1.05); }
        `;
        document.head.appendChild(style);

        const waLink = document.createElement('a');
        waLink.id = "wa-direct-btn";
        waLink.href = 'https://wa.me/919258722629?text=' + encodeURIComponent('Hi');
        waLink.target = "_blank"; // Opens in a new tab/app window
        waLink.innerHTML = `<img src="https://cabbazar.com/assets/img/icons/whatsapp.webp" width=60px height=60px alt="Connect on WhatsApp" />`;

        document.body.appendChild(waLink);
    }, 1000);
})();
