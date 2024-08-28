// Selección de elementos
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const encryptButton = document.getElementById('encryptButton');
const decryptButton = document.getElementById('decryptButton');
const copyButton = document.getElementById('copyButton');
const message = document.getElementById('message');

// Desplazamiento para encriptación (cifra de César)
const shift = 3;

// Función para encriptar el texto usando cifra de César
function encryptText() {
    const text = inputText.value;
    if (validateText(text)) {
        const encryptedText = text.split('').map(char => shiftChar(char, shift)).join('');
        outputText.textContent = encryptedText;
        message.textContent = '';
    } else {
        message.textContent = 'Solo se permiten letras minúsculas y sin caracteres especiales.';
    }
}

// Función para desencriptar el texto usando cifra de César
function decryptText() {
    const text = outputText.textContent;
    if (validateText(text)) {
        const decryptedText = text.split('').map(char => shiftChar(char, -shift)).join('');
        outputText.textContent = decryptedText;
        message.textContent = '';
    } else {
        message.textContent = 'Solo se permiten letras minúsculas y sin caracteres especiales.';
    }
}

// Función para copiar el texto al portapapeles
function copyText() {
    const text = outputText.textContent;
    navigator.clipboard.writeText(text).then(() => {
        message.textContent = 'Texto copiado al portapapeles.';
    }, () => {
        message.textContent = 'Error al copiar el texto.';
    });
}

// Validar que el texto solo contenga minúsculas y no tenga caracteres especiales
function validateText(text) {
    return /^[a-z\s]*$/.test(text); // Solo letras minúsculas y espacios
}

// Función para desplazar caracteres (cifra de César)
function shiftChar(char, shift) {
    if (char >= 'a' && char <= 'z') {
        return String.fromCharCode(((char.charCodeAt(0) - 'a'.charCodeAt(0) + shift + 26) % 26) + 'a'.charCodeAt(0));
    }
    return char; // Retorna el carácter sin cambios si no es una letra minúscula
}

// Añadir eventos a los botones
encryptButton.addEventListener('click', encryptText);
decryptButton.addEventListener('click', decryptText);
copyButton.addEventListener('click', copyText);
