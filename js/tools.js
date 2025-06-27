document.addEventListener('DOMContentLoaded', function() {
    // جلب جميع الأدوات
    fetchTools();
    
    async function fetchTools() {
        try {
            const response = await fetch('../data/tools.json');
            const tools = await response.json();
            displayTools(tools);
            
            // تصفية الأدوات حسب التصنيف
            document.getElementById('categoryFilter').addEventListener('change', function() {
                filterToolsByCategory(tools, this.value);
            });
            
            // البحث عن الأدوات إذا كان هناك استعلام بحث
            const urlParams = new URLSearchParams(window.location.search);
            const searchQuery = urlParams.get('search');
            if (searchQuery) {
                searchTools(tools, searchQuery);
            }
        } catch (error) {
            console.error('حدث خطأ في جلب الأدوات:', error);
        }
    }
    
    function displayTools(tools) {
        const toolsContainer = document.getElementById('toolsContainer');
        toolsContainer.innerHTML = '';
        
        tools.forEach(tool => {
            const toolCard = document.createElement('div');
            toolCard.className = 'tool-card';
            toolCard.innerHTML = `
                <div class="tool-icon">
                    <i class="${tool.icon}"></i>
                </div>
                <div class="tool-info">
                    <h3>${tool.name}</h3>
                    <p>${tool.description}</p>
                    <span class="tool-category">${tool.category}</span>
                </div>
                <a href="${tool.link}" class="tool-link">استخدم الأداة</a>
            `;
            toolsContainer.appendChild(toolCard);
        });
    }
    
    function filterToolsByCategory(tools, category) {
        const filteredTools = category === 'all' 
            ? tools 
            : tools.filter(tool => tool.category === category);
        displayTools(filteredTools);
    }
    
    function searchTools(tools, query) {
        const filteredTools = tools.filter(tool => 
            tool.name.includes(query) || 
            tool.description.includes(query) ||
            tool.category.includes(query)
        );
        displayTools(filteredTools);
    }
});