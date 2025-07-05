// Array global para perguntas
let faqs = [];

// Variáveis de controle
let currentEditId = null;
let faqToDelete = null;

// Referências DOM
const faqForm = document.getElementById('faqForm');
const faqList = document.getElementById('faqList');
const emptyState = document.getElementById('emptyState');
const searchInput = document.getElementById('searchInput');
const cancelBtn = document.getElementById('cancelBtn');
const submitBtn = document.getElementById('submitBtn');
const confirmModal = document.getElementById('confirmModal');
const modalCancel = document.getElementById('modalCancel');
const modalConfirm = document.getElementById('modalConfirm');

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  renderFaqs();

  faqForm.addEventListener('submit', handleSubmit);
  searchInput.addEventListener('input', handleSearch);
  cancelBtn.addEventListener('click', resetForm);

  modalCancel.addEventListener('click', () => {
    confirmModal.classList.add('hidden');
    faqToDelete = null;
  });

  modalConfirm.addEventListener('click', () => {
    if (faqToDelete) {
      deleteFaq(faqToDelete);
      faqToDelete = null;
      confirmModal.classList.add('hidden');
    }
  });
});

// Função para adicionar/editar
function handleSubmit(e) {
  e.preventDefault();

  const question = document.getElementById('question').value.trim();
  const answer = document.getElementById('answer').value.trim();
  const category = document.getElementById('category').value;
  const isActive = document.getElementById('isActive').checked;

  if (!question || !answer) return; // Validação simples

  if (currentEditId) {
    // Atualizando pergunta existente
    faqs = faqs.map(faq =>
      faq.id === currentEditId
        ? {
            ...faq,
            question,
            answer,
            category,
            isActive,
            updatedAt: new Date().toISOString(),
          }
        : faq
    );
  } else {
    // Inserindo nova pergunta
    const newFaq = {
      id: Date.now().toString(),
      question,
      answer,
      category,
      isActive,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    faqs.unshift(newFaq);
  }

  resetForm();
  renderFaqs();
}

// Renderiza a lista inteira
function renderFaqs() {
  renderFaqList(faqs);
}

// Renderiza a lista filtrada
function renderFaqList(faqsToRender) {
  if (faqsToRender.length === 0) {
    faqList.innerHTML = '';
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');

  faqList.innerHTML = faqsToRender
    .map(
      faq => `
      <div class="card bg-white rounded-xl shadow-sm p-6 ${faq.isActive ? '' : 'opacity-80'}">
        <div class="flex justify-between items-start mb-2">
          <div>
            <span class="inline-block px-3 py-1 text-xs font-semibold rounded-full ${getCategoryColor(faq.category)}">${faq.category}</span>
          </div>
          <div class="text-sm text-gray-500">${formatDate(faq.updatedAt)}</div>
        </div>
        <h3 class="text-lg font-semibold mb-2 text-gray-800">${faq.question}</h3>
        <p class="text-gray-600 mb-4">${faq.answer}</p>
        <div class="flex space-x-3">
          <button onclick="editFaq('${faq.id}')" class="text-sm text-blue-600 hover:text-blue-800 font-medium">Editar</button>
          <button onclick="confirmDelete('${faq.id}')" class="text-sm text-red-600 hover:text-red-800 font-medium">Excluir</button>
          <button onclick="toggleFaqStatus('${faq.id}', ${faq.isActive})" class="text-sm ${
            faq.isActive ? 'text-orange-600 hover:text-orange-800' : 'text-green-600 hover:text-green-800'
          } font-medium">
            ${faq.isActive ? 'Desativar' : 'Ativar'}
          </button>
        </div>
      </div>
    `
    )
    .join('');
}

// Editar pergunta
function editFaq(id) {
  const faq = faqs.find(f => f.id === id);
  if (!faq) return;

  document.getElementById('question').value = faq.question;
  document.getElementById('answer').value = faq.answer;
  document.getElementById('category').value = faq.category;
  document.getElementById('isActive').checked = faq.isActive;
  document.getElementById('faqId').value = faq.id;

  currentEditId = id;
  cancelBtn.classList.remove('hidden');
  submitBtn.textContent = 'Atualizar';

  faqForm.scrollIntoView({ behavior: 'smooth' });
}

// Alterna status ativo/inativo
function toggleFaqStatus(id, currentStatus) {
  const faq = faqs.find(f => f.id === id);
  if (faq) {
    faq.isActive = !currentStatus;
    faq.updatedAt = new Date().toISOString();
    renderFaqs();
  }
}

// Confirma exclusão
function confirmDelete(id) {
  faqToDelete = id;
  confirmModal.classList.remove('hidden');
}

// Exclui pergunta
function deleteFaq(id) {
  faqs = faqs.filter(faq => faq.id !== id);
  renderFaqs();
}

// Reset form
function resetForm() {
  faqForm.reset();
  document.getElementById('faqId').value = '';
  currentEditId = null;
  cancelBtn.classList.add('hidden');
  submitBtn.textContent = 'Salvar';
}

// Cor das categorias
function getCategoryColor(category) {
  const colors = {
    Geral: 'bg-gray-200 text-gray-800',
    Técnica: 'bg-blue-100 text-blue-800',
    Financeira: 'bg-green-100 text-green-800',
    Suporte: 'bg-purple-100 text-purple-800',
  };
  return colors[category] || 'bg-gray-200 text-gray-800';
}

// Formata data pt-BR
function formatDate(dateString) {
  const date = new Date(dateString);
  return (
    date.toLocaleDateString('pt-BR') +
    ' às ' +
    date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
  );
}

// Busca na lista
function handleSearch(e) {
  const searchTerm = e.target.value.toLowerCase();

  if (searchTerm.length > 0) {
    const filtered = faqs.filter(
      faq =>
        faq.question.toLowerCase().includes(searchTerm) ||
        faq.answer.toLowerCase().includes(searchTerm) ||
        faq.category.toLowerCase().includes(searchTerm)
    );

    renderFaqList(filtered);
  } else {
    renderFaqs();
  }
}
