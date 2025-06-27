// تنبيه الترحيب
document.addEventListener('DOMContentLoaded', function() {
    console.log('مرحبًا بك في دليل أدوات الذكاء الاصطناعي!');
    
    // القائمة المتنقلة للهواتف
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        mainNav.style.display = mainNav.style.display === 'block' ? 'none' : 'block';
    });
    
    // تغيير لون الهيدر عند التمرير
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.main-header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(26, 26, 46, 0.95)';
        } else {
            header.style.backgroundColor = 'white';
        }
    });
    
    // البحث عن الأدوات
    const searchInput = document.querySelector('.search-box input');
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            searchTools(this.value);
        }
    });
    
    function searchTools(query) {
        // هنا سيتم تنفيذ البحث
        console.log('بحث عن:', query);
        window.location.href = `tools/index.html?search=${encodeURIComponent(query)}`;
    }
    
    // تحميل الأدوات الشائعة
    fetchFeaturedTools();
    
    async function fetchFeaturedTools() {
        try {
            const response = await fetch('data/featured-tools.json');
            const tools = await response.json();
            displayFeaturedTools(tools);
        } catch (error) {
            console.error('حدث خطأ في جلب الأدوات:', error);
        }
    }
    
    function displayFeaturedTools(tools) {
        // عرض الأدوات في الصفحة الرئيسية
    }
});