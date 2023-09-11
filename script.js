// 监听DOM加载完成事件
document.addEventListener("DOMContentLoaded", function () {
    // 找到菜单按钮和菜单
    const menuButton = document.getElementById("menu-button");
    const menu = document.getElementById("menu");

    // 添加点击事件监听器，切换菜单的扩展类
    menuButton.addEventListener("click", function () {
        menu.classList.toggle("expanded");
    });

    // 找到联系方式链接元素和footer元素
    const contactLink = document.querySelector('a[href="#footer"]');
    const footer = document.getElementById('footer');

    // 添加点击事件监听器，平滑滚动到footer
    contactLink.addEventListener('click', function (event) {
        event.preventDefault(); // 阻止默认的链接行为
        footer.scrollIntoView({ behavior: 'smooth' }); // 平滑滚动到footer
    });
});
