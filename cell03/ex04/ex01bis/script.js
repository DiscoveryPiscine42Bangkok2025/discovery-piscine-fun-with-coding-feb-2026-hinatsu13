$(document).ready(function() {
    let currentSize = 200;
    let currentColorIndex = 0;
    
    const colors = ['red', 'green', 'blue'];
    
    $('#balloon').click(function() {
        currentSize += 10;
        
        if (currentSize > 420) {
            currentSize = 200;
            currentColorIndex = 0;
            $(this).css({
                'width': currentSize + 'px',
                'height': currentSize + 'px',
                'background-color': colors[currentColorIndex]
            });
            return;
        }
        
        $(this).css({
            'width': currentSize + 'px',
            'height': currentSize + 'px'
        });
        
        currentColorIndex = (currentColorIndex + 1) % 3;
        $(this).css('background-color', colors[currentColorIndex]);
    });
    
    $('#balloon').mouseleave(function() {
        currentSize -= 5;
        if (currentSize < 200) {
            currentSize = 200;
        }
        
        $(this).css({
            'width': currentSize + 'px',
            'height': currentSize + 'px'
        });
        
        currentColorIndex = (currentColorIndex - 1 + 3) % 3;
        $(this).css('background-color', colors[currentColorIndex]);
    });
});
