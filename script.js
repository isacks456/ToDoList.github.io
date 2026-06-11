const mainBtn = document.getElementById('btn');
const mainList = document.getElementById('title1');
const mainInput = document.getElementById('input');
const clearAllBtn = document.getElementById('clear-all-btn'); 


function toggleClearButton() {
    if (mainList.children.length > 0) {
        clearAllBtn.style.display = 'block';
    } else {
        clearAllBtn.style.display = 'none';
    }
}


function updateNumbers() {
    const textSpans = mainList.querySelectorAll('.task-text');
    
    textSpans.forEach((span, index) => {
        const currentText = span.textContent.replace(/^\d+\.\s*/, '');
        span.textContent = `${index + 1}. ${currentText}`;
    });
}


mainBtn.addEventListener('click', () => {
    const text = mainInput.value.trim();
    
    if (text !== "") {
        const currentNumber = mainList.children.length + 1;

        const taskRow = document.createElement('div');
        taskRow.className = 'task-row';
        taskRow.style.display = 'flex';
        taskRow.style.alignItems = 'center';
        taskRow.style.gap = '10px';
        taskRow.style.marginBottom = '10px';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const textSpan = document.createElement('span');
        textSpan.className = 'task-text';
        textSpan.textContent = `${currentNumber}. ${text}`;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '❌';
        deleteBtn.style.cursor = 'pointer';
        deleteBtn.style.background = 'none';
        deleteBtn.style.border = 'none';

        
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                textSpan.style.textDecoration = 'line-through';
                textSpan.style.color = '#888';
            } else {
                textSpan.style.textDecoration = 'none';
                textSpan.style.color = 'inherit';
            }
        });

        
        deleteBtn.addEventListener('click', () => {
            taskRow.remove(); 
            updateNumbers();  
            toggleClearButton(); 
        });

        taskRow.appendChild(checkbox);
        taskRow.appendChild(textSpan);
        taskRow.appendChild(deleteBtn);
        mainList.appendChild(taskRow);

        mainInput.value = '';
        
        toggleClearButton(); 
    }
});


clearAllBtn.addEventListener('click', () => {
    mainList.innerHTML = ''; 
    toggleClearButton();     
});
