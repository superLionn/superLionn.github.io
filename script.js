// script.js - 通用组件加载脚本
document.addEventListener('DOMContentLoaded', function() {
    // 加载 Header
    fetch('/components/header.html')
        .then(response => {
            if (!response.ok) throw new Error('Header load failed');
            return response.text();
        })
        .then(html => {
            // 将 Header 插入到页面的 header 容器中
            const headerContainer = document.getElementById('header-container');
            if (headerContainer) headerContainer.innerHTML = html;
        })
        .catch(error => console.error('Error loading header:', error));

    // 加载 Footer
    fetch('/components/footer.html')
        .then(response => {
            if (!response.ok) throw new Error('Footer load failed');
            return response.text();
        })
        .then(html => {
            // 将 Footer 插入到页面的 footer 容器中
            const footerContainer = document.getElementById('footer-container');
            if (footerContainer) footerContainer.innerHTML = html;
        })
        .catch(error => console.error('Error loading footer:', error));
});
