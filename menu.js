// Define your menu items
const menuItems = {
    "Papads": ["Fry Papad", "Fry Masala Papad ", "Rosted Papad","Rosted masala Papad","Nagali Papad","Nagali masala Papad"],
    "Tandoori Starter": ["Tandoori Paneer Tikka", "Paneer Makhmali ", "Paneer Afghani","Veg Seekh Kabab","Aloo Achari","Paneer Pahadi Tikka"],
    "Soups": ["Veg Manchow Soup", "Tomato Soup ", "Hot Sour Soup","Lemon Coriander Soup","Sweet Corn Soup","Minnie Strone Soup"],
    "Kabab": ["Veg Hara Bhara Kabab", "Cheese Corn Tikki ", "Red Velvet Kebab","Veg Rimjhim Kebab"],
    "Roti": ["Tandoori Roti", "Wheat Roti ", "Butter Naan","Butter Garlic Naan","lachha Paratha","kulcha paratha","Bajra Bhakri","Jowar Bhakri","Chapati","Butter Cheese  Garlic Naan","Pizza Roti","Roti Basket"],
    "Main Course": ["Shev Bhaji Gravy",  "Baingan Masala Gravy","Shevga Masala ","Bhendi Masala ","Methi Masala","lasooni Methi Dry","Besan Pithla","Shevga Fry","Baingan Bharta","Paneer Masala", "Paneer Matar", "Paneer Tikka Masala", "Tava Besan","Veg Kolhapuri","Mix Veg","Paneer Sahuji","Shahi Paneer"],
    "Rice": ["Plain Rice ", "Jira Rice ", "Veg Pulao","Paneer Pulao","Butter Dal Khichadi","Masala Rice","Veg Dum Biryani", "Paneer Biryani","Veg Hyderabadi Biryani "],
    "Chinese-Rice": ["Veg Fried Rice ", "Veg Schezwan Rice ", "Veg Schezwan Fried Rice","Paneer Pulao","Butter Dal Khichadi"],
    "Noodles": ["veg Hakka Noodles  ", "Veg Schezwan Noodles ", "american Chop Suey"],
    "Pakoda": ["veg Sandwich  ", "Veg Pakoda ", "Onion Pakoda","Paneer Pakoda","Mix Veg Pakoda","Alu Paratha","Paneer Paratha"],
    "Chinese-starter": ["Veg Manchurian", "Gobi Manchurian ", "Pnaeer Chilli","Paneer 65"," Veg Crispy","Crispy Corn"],
    "Dal": ["Dal Fry", "Dal Tadka ", "Dal Kolhapuri","Dal Makhni"],
    "Sweet": ["GulabJam", "Icecream"],

    

    // Add more menu items in the same format
};

// Function to create submenu items
function createSubMenu(subMenuElement, subMenuItems) {
    subMenuItems.forEach(item => {
        const span = document.createElement('span');
        span.textContent = item;
        subMenuElement.appendChild(span);
    });
}

// Function to toggle submenu
function toggleSubMenu(arrow) {
    const subMenu = arrow.nextElementSibling;
    const allSubMenus = document.querySelectorAll('.SubMenu');
    
    // Hide all submenus
    allSubMenus.forEach(menu => {
        if (menu !== subMenu) {
            menu.style.display = 'none';
        }
    });

    // Toggle display of clicked submenu
    if (subMenu.style.display === 'block') {
        subMenu.style.display = 'none';
    } else {
        subMenu.style.display = 'block';
    }
}

// Function to initialize menu
function initializeMenu() {
    const menuContainers = document.querySelectorAll('.seperateMenu');
    menuContainers.forEach(container => {
        const menuTitle = container.querySelector('h3').textContent;
        if (menuItems.hasOwnProperty(menuTitle)) {
            const subMenuElement = container.querySelector('.SubMenu');
            createSubMenu(subMenuElement, menuItems[menuTitle]);
        }
    });

    // Hide all submenus initially
    const allSubMenus = document.querySelectorAll('.SubMenu');
    allSubMenus.forEach(subMenu => {
        subMenu.style.display = 'none';
    });

    const arrows = document.querySelectorAll('.arrow');
    arrows.forEach(arrow => {
        arrow.addEventListener('click', function() {
            toggleSubMenu(this);
        });
    });
}

// Initialize the menu
initializeMenu();
