//https://raw.githubusercontent.com/StevenKwan/stash-waffle/main/tiles/csdngreener.js
$response.body = $response.body.replace('</html>', `
<script defer>
window.onload = function(){
console.log("CSDNGreener Start")

$("code").css("user-select","auto");
$("#content_views").css("user-select","auto");
$("pre").css("user-select","auto");

$(".look-more-preCode").click();

$(".hljs-button").removeClass("signin");
$(".hljs-button").addClass("{2}");
$(".hljs-button").attr("data-title", "免登录复制");
$(".hljs-button").attr("onclick", "hljs.copyCode(event);setTimeout(function(){$('.hljs-button').attr('data-title', '免登录复制');},3500);");


$("code").attr("onclick", "mdcp.copyCode(event)");
try {
    Object.defineProperty(window, "articleType", {
        value: 0,
        writable: false,
        configurable: false
    });
} catch (err) {
}
csdn.copyright.init("", "", "");

console.log("CSDNGreener Finish")
}
</script>
</html>
`);

$done({ 'body': $response.body })
