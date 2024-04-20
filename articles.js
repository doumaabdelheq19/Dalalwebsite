document.addEventListener("DOMContentLoaded",function(){
    const articles =document.querySelector(".articles");
    const article =document.querySelector(".article");
    const scrollbar =document.querySelector(".scrollbar");
    const thumb =document.querySelector(".thumb");
    function updateThumb() {
        const scrollPercentage = article.scrollTop / (article.scrollHeight - article.clientHeight);
        const thumbHeight = articles.clientHeight * scrollPercentage;
        thumb.style.height = thumbHeight + "px";
    }
      
     
      thumb.addEventListener("mousedown", function(e) {
        e.preventDefault();
        const startY = e.clientY;
        const startScroll = article.scrollTop;
        
        function onMouseMove(e) {
          const deltaY = e.clientY - startY;
          const scrollAmount = deltaY / article.clientHeight * (content.scrollHeight - content.clientHeight);
          article.scrollTop = startScroll + scrollAmount;
        }
        
        function onMouseUp() {
          document.removeEventListener("mousemove", onMouseMove);
          document.removeEventListener("mouseup", onMouseUp);
        }
        
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
      });
      
      
      content.addEventListener("scroll", updateThumb);
 });