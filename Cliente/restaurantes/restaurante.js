document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('businessForm');
    const formSteps = document.querySelectorAll('.form-step');
    const progressSteps = document.querySelectorAll('.progress-step');
    const nextButtons = document.querySelectorAll('.btn-next');
    const prevButtons = document.querySelectorAll('.btn-prev');
    const verifyRUCBtn = document.getElementById('verifyRUC');
    const rucInput = document.getElementById('businessRUC');
    const rucStatus = document.getElementById('rucStatus');
    const verificationModal = document.getElementById('verificationModal');
    const closeModal = document.querySelector('.close-modal');
    const confirmVerification = document.getElementById('confirmVerification');
    const verificationMessage = document.getElementById('verificationMessage');
    const photoPreview = document.getElementById('photoPreview');
    const photoInput = document.getElementById('businessPhotos');
    
    let currentStep = 1;
    let verificationCode = '';
    let isRUCVerified = false;
    
    // Mostrar el paso actual
    function showStep(step) {
        formSteps.forEach(formStep => {
            formStep.classList.remove('active');
            if(parseInt(formStep.dataset.step) === step) {
                formStep.classList.add('active');
            }
        });
        
        progressSteps.forEach(progressStep => {
            progressStep.classList.remove('active');
            if(parseInt(progressStep.dataset.step) <= step) {
                progressStep.classList.add('active');
            }
        });
        
        currentStep = step;
    }
    
    // Validar campos antes de avanzar
    function validateStep(step) {
        let isValid = true;
        const currentFormStep = document.querySelector(`.form-step[data-step="${step}"]`);
        const requiredInputs = currentFormStep.querySelectorAll('[required]');
        
        requiredInputs.forEach(input => {
            if(!input.value.trim()) {
                input.style.borderColor = 'var(--danger-color)';
                isValid = false;
            } else {
                input.style.borderColor = '#ddd';
            }
        });
        
        // Validación especial para el RUC
        if(step === 3 && !isRUCVerified) {
            rucStatus.textContent = 'Debes verificar tu RUC antes de continuar';
            rucStatus.className = 'status-message error';
            isValid = false;
        }
        
        // Validación especial para fotos
        if(step === 4) {
            const photoFiles = photoInput.files;
            if(photoFiles.length < 3) {
                photoInput.style.borderColor = 'var(--danger-color)';
                isValid = false;
            } else {
                photoInput.style.borderColor = '#ddd';
            }
        }
        
        return isValid;
    }
    
    // Event listeners para botones Siguiente
    nextButtons.forEach(button => {
        button.addEventListener('click', function() {
            if(validateStep(currentStep)) {
                showStep(currentStep + 1);
            }
        });
    });
    
    // Event listeners para botones Anterior
    prevButtons.forEach(button => {
        button.addEventListener('click', function() {
            showStep(currentStep - 1);
        });
    });
    
    // Verificación de RUC (simulada)
    verifyRUCBtn.addEventListener('click', function() {
        const ruc = rucInput.value.trim();
        
        if(!ruc || ruc.length !== 11 || !/^\d+$/.test(ruc)) {
            rucStatus.textContent = 'El RUC debe tener 11 dígitos numéricos';
            rucStatus.className = 'status-message error';
            return;
        }
        
        // Simular verificación con API (en producción sería una llamada real)
        rucStatus.textContent = 'Verificando RUC...';
        rucStatus.className = 'status-message warning';
        
        setTimeout(() => {
            // Simular éxito o fallo aleatorio (en producción dependería de la respuesta real)
            const isSuccess = Math.random() > 0.2; // 80% de éxito para demostración
            
            if(isSuccess) {
                rucStatus.textContent = 'RUC verificado correctamente';
                rucStatus.className = 'status-message success';
                isRUCVerified = true;
                
                // Mostrar modal de verificación por correo (simulado)
                verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
                verificationModal.style.display = 'flex';
            } else {
                rucStatus.textContent = 'No pudimos verificar el RUC. Por favor verifica el número e intenta nuevamente.';
                rucStatus.className = 'status-message error';
                isRUCVerified = false;
            }
        }, 1500);
    });
    
    // Cerrar modal
    closeModal.addEventListener('click', function() {
        verificationModal.style.display = 'none';
    });
    
    // Confirmar verificación
    confirmVerification.addEventListener('click', function() {
        const enteredCode = document.getElementById('verificationCode').value.trim();
        
        if(enteredCode === verificationCode) {
            verificationMessage.textContent = '¡Verificación exitosa! Tu negocio ha sido validado.';
            verificationMessage.className = 'status-message success';
            
            setTimeout(() => {
                verificationModal.style.display = 'none';
            }, 2000);
        } else {
            verificationMessage.textContent = 'Código incorrecto. Por favor intenta nuevamente.';
            verificationMessage.className = 'status-message error';
        }
    });
    
    // Vista previa de fotos
    photoInput.addEventListener('change', function() {
        photoPreview.innerHTML = '';
        const files = this.files;
        
        if(files.length > 10) {
            alert('Solo puedes subir un máximo de 10 fotos');
            this.value = '';
            return;
        }
        
        Array.from(files).forEach(file => {
            if(!file.type.match('image.*')) {
                return;
            }
            
            const reader = new FileReader();
            
            reader.onload = function(e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                photoPreview.appendChild(img);
            }
            
            reader.readAsDataURL(file);
        });
    });
    
    // Envío del formulario
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if(validateStep(currentStep)) {
            // Simular envío (en producción sería una llamada AJAX o fetch)
            alert('Formulario enviado correctamente. Tu negocio será revisado y publicado en breve.');
            form.reset();
            showStep(1);
            isRUCVerified = false;
            
            // Aquí iría el código para enviar los datos al servidor
            // const formData = new FormData(form);
            // fetch('/api/register-business', { method: 'POST', body: formData })
            //   .then(response => response.json())
            //   .then(data => {
            //       // Manejar respuesta
            //   });
        }
    });
    
    // Mostrar el primer paso al cargar
    showStep(1);
});