$(document).ready(function() {
    const COOKIE_NAME = 'ft_todo_list';

    loadTodosFromCookie();
    
    $('#newBtn').click(function() {
        const todoText = prompt('Enter a new TO DO:');
        
        if (todoText && todoText.trim() !== '') {
            addTodo(todoText.trim());
            saveTodosToCookie();
        }
    });
    
    function addTodo(text) {
        const todoDiv = $('<div></div>')
            .addClass('todo-item')
            .text(text);
        
        todoDiv.click(function() {
            const confirmed = confirm('Do you want to remove this TO DO?');
            
            if (confirmed) {
                $(this).remove();
                saveTodosToCookie();
            }
        });
        
        $('#ft_list').prepend(todoDiv);
    }
    
    function saveTodosToCookie() {
        const todos = [];
        
        $('#ft_list .todo-item').each(function() {
            todos.push($(this).text());
        });
        
        const todosJSON = JSON.stringify(todos);
        const expiryDate = new Date();
        expiryDate.setFullYear(expiryDate.getFullYear() + 1);
        
        document.cookie = COOKIE_NAME + '=' + encodeURIComponent(todosJSON) + 
                          '; expires=' + expiryDate.toUTCString() + 
                          '; path=/';
    }
    
    function loadTodosFromCookie() {
        const cookies = document.cookie.split(';');
        let todosCookie = null;
        
        $.each(cookies, function(index, cookie) {
            const trimmedCookie = cookie.trim();
            if (trimmedCookie.startsWith(COOKIE_NAME + '=')) {
                todosCookie = trimmedCookie.substring(COOKIE_NAME.length + 1);
                return false;
            }
        });
        
        if (todosCookie) {
            try {
                const todos = JSON.parse(decodeURIComponent(todosCookie));
                
                for (let i = todos.length - 1; i >= 0; i--) {
                    addTodo(todos[i]);
                }
            } catch (e) {
                console.error('Error loading todos from cookie:', e);
            }
        }
    }
});
