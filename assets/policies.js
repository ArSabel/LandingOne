const POLICY_TEXTS = {
  es: {
    ft_terms: "Términos y condiciones",
    ft_privacy: "Política de privacidad",
    refund_title: "Política de reembolso",
    refund_body: `
      <h3>Productos digitales</h3>
      <p>Netwheels vende exclusivamente productos digitales (PDF y HTML interactivo) con entrega inmediata vía correo electrónico. Por la propia naturaleza del producto, una vez que se ha accedido y descargado el contenido, no se puede devolver en un sentido físico.</p>
      <h3>Garantía de satisfacción de 7 días</h3>
      <p>Si después de leer tu libro sientes que no es para ti, escríbenos dentro de los primeros 7 días calendario a partir de la compra y procesaremos un reembolso del 100% de lo pagado, sin preguntas extrañas. Solo te pedimos que nos cuentes brevemente qué esperabas y no encontraste — esta información nos ayuda a mejorar.</p>
      <h3>Cómo solicitar un reembolso</h3>
      <p>Escríbenos por WhatsApp al <a href="https://wa.me/593968473255" target="_blank" rel="noopener noreferrer">+593 96 847 3255</a> o por correo electrónico a <a href="mailto:edwardsmurillo@hotmail.com">edwardsmurillo@hotmail.com</a>.</p>
      <ul>
        <li>Incluye el correo electrónico con el cual realizaste la compra y el título del libro.</li>
        <li>El reembolso será procesado al método de pago original en un plazo de 5 a 10 días hábiles, dependiendo de tu banco o pasarela de pago.</li>
      </ul>
      <h3>Casos no cubiertos</h3>
      <ul>
        <li>Solicitudes realizadas después de 7 días de la fecha de compra.</li>
        <li>Disputas o reembolsos solicitados directamente al banco sin antes habernos contactado.</li>
        <li>Reclamaciones por insatisfacción con el tono o enfoque del contenido si el cliente ya ha consumido más del 80% del material.</li>
      </ul>
      <h3>Contacto</h3>
      <p>Para cualquier duda sobre esta política, escríbenos por WhatsApp al <a href="https://wa.me/593968473255" target="_blank" rel="noopener noreferrer">+593 96 847 3255</a> o por correo a <a href="mailto:edwardsmurillo@hotmail.com">edwardsmurillo@hotmail.com</a>. Respondemos en horario comercial GMT-5 (Ecuador).</p>
      <p>Esta política se rige por las leyes de la República del Ecuador y respeta la Ley Orgánica de Defensa del Consumidor.</p>
    `,
    terms_title: "Términos y condiciones",
    terms_body: `
      <h3>1. Sobre Netwheels</h3>
      <p>Netwheels es una marca de contenido educativo digital con base en Ecuador. A través de este sitio web vendemos guías digitales (PDF + HTML interactivo) sobre intimidad, relaciones y comunicación de pareja. Todo el contenido está destinado a mayores de 18 años (+18).</p>
      <h3>2. Aceptación de estos términos</h3>
      <p>Al utilizar este sitio o comprar cualquier producto, confirmas que eres mayor de edad y aceptas estos Términos de Servicio en su totalidad. Si no estás de acuerdo, te solicitamos que no uses el sitio ni realices compras.</p>
      <h3>3. Naturaleza del Contenido</h3>
      <p>Nuestros libros son material educativo y de reflexión. No constituyen asesoramiento médico, psicológico o sexológico, y no reemplazan la consulta con un profesional de la salud. Si tienes alguna preocupación de salud, te recomendamos hablar con un especialista de confianza.</p>
      <h3>4. Entrega y Acceso</h3>
      <p>Una vez procesado el pago, recibirás por correo electrónico los enlaces de descarga del PDF y de la versión HTML interactiva. La entrega es inmediata (generalmente en menos de 60 segundos). Si no recibes los enlaces en un plazo de 1 hora, revisa tu carpeta de spam o escríbenos por WhatsApp.</p>
      <h3>5. Uso del Contenido</h3>
      <p>El contenido es para tu uso personal exclusivo. No se permite revender, redistribuir, compartir públicamente o reproducir total o parcialmente el contenido sin autorización por escrito de Netwheels. Todos los derechos reservados.</p>
      <h3>6. Reembolsos</h3>
      <p>Ofrecemos una garantía de satisfacción de 7 días a partir de la fecha de compra. Revisa los detalles en nuestra Política de Reembolso.</p>
      <h3>7. Limitación de Responsabilidad</h3>
      <p>El contenido de los libros se entrega "tal cual", sin garantías expresas o implícitas más allá de las explícitamente indicadas. Netwheels no se responsabiliza por interpretaciones personales, decisiones tomadas con base en el contenido o resultados específicos en relaciones de pareja.</p>
      <h3>8. Modificaciones</h3>
      <p>Podemos actualizar estos términos ocasionalmente. La versión vigente siempre estará publicada en este sitio.</p>
      <h3>9. Ley Aplicable</h3>
      <p>Estos términos se rigen por las leyes de la República del Ecuador.</p>
      <h3>10. Contacto</h3>
      <p>WhatsApp: <a href="https://wa.me/593968473255" target="_blank" rel="noopener noreferrer">+593 96 847 3255</a><br>Correo electrónico: <a href="mailto:edwardsmurillo@hotmail.com">edwardsmurillo@hotmail.com</a></p>
    `,
    privacy_title: "Política de privacidad",
    privacy_body: `
      <h3>¿Qué datos recolectamos?</h3>
      <p>Cuando te registras o compras, recolectamos tu correo electrónico, número de teléfono y nombre para entregar nuestros productos digitales. Además, si nos das tu consentimiento expreso a través de nuestro aviso de cookies, capturamos tu dirección IP y el tipo de navegador para mejorar nuestros servicios.</p>
      <h3>¿Para qué los usamos?</h3>
      <p>Principalmente, usamos tus datos para proporcionarte acceso al material que solicitaste y para ofrecerte soporte. Solo con tu autorización, compartimos ciertos datos (encriptados de forma segura) con Meta (Facebook/Instagram) para medir la efectividad de nuestros anuncios y mostrarte contenido relevante usando la API de Conversiones.</p>
      <h3>Tus derechos</h3>
      <p>Puedes rechazar el uso de tus datos para fines de marketing y análisis en cualquier momento. Nunca venderemos tus datos personales a terceros bajo ninguna circunstancia. Puedes solicitar la eliminación de tus datos escribiéndonos a nuestro correo de soporte.</p>
    `
  },
  en: {
    ft_terms: "Terms and conditions",
    ft_privacy: "Privacy policy",
    refund_title: "Refund Policy",
    refund_body: `
      <h3>Digital products</h3>
      <p>Netwheels exclusively sells digital products (PDF and interactive HTML) with immediate delivery via email. By the very nature of the product, once the content is accessed and downloaded, it cannot be returned in a physical sense.</p>
      <h3>7-day satisfaction guarantee</h3>
      <p>If after reading your book you feel it is not for you, write to us within the first 7 calendar days from the purchase and we will process a 100% refund of the amount paid, no weird questions asked. We only ask that you briefly tell us what you expected and didn't find — this information helps us improve.</p>
      <h3>How to request a refund</h3>
      <p>Write to us on WhatsApp at <a href="https://wa.me/593968473255" target="_blank" rel="noopener noreferrer">+593 96 847 3255</a> or by email at <a href="mailto:edwardsmurillo@hotmail.com">edwardsmurillo@hotmail.com</a>.</p>
      <ul>
        <li>Include the email with which you made the purchase and the title of the book.</li>
        <li>The refund will be processed to the original payment method within 5 to 10 business days, depending on your bank or payment gateway.</li>
      </ul>
      <h3>Cases not covered</h3>
      <ul>
        <li>Requests made after 7 days from the purchase date.</li>
        <li>Disputes or refunds requested directly to the bank without contacting us first.</li>
        <li>Claims due to dissatisfaction with the tone or focus of the content if the client has already consumed more than 80% of the material.</li>
      </ul>
      <h3>Contact</h3>
      <p>For any questions regarding this policy, write to us on WhatsApp at <a href="https://wa.me/593968473255" target="_blank" rel="noopener noreferrer">+593 96 847 3255</a> or by email at <a href="mailto:edwardsmurillo@hotmail.com">edwardsmurillo@hotmail.com</a>. We reply during business hours GMT-5 (Ecuador).</p>
      <p>This policy is governed by the laws of the Republic of Ecuador and complies with the Organic Law for the Defense of the Consumer.</p>
    `,
    terms_title: "Terms and Conditions",
    terms_body: `
      <h3>1. About Netwheels</h3>
      <p>Netwheels is a digital educational content brand based in Ecuador. Through this website we sell digital guides (PDF + interactive HTML) about intimacy, relationships, and couple communication. All content is strictly intended for individuals 18 and older (+18).</p>
      <h3>2. Acceptance of these terms</h3>
      <p>By using this site or purchasing any product, you confirm that you are of legal age and accept these Terms of Service in their entirety. If you do not agree, we request that you do not use the site or make purchases.</p>
      <h3>3. Nature of the Content</h3>
      <p>Our books are educational and reflection material. They do not constitute medical, psychological, or sexological advice, and do not replace consultation with a healthcare professional. If you have any health concerns, we recommend speaking with a trusted specialist.</p>
      <h3>4. Delivery and Access</h3>
      <p>Once the payment is processed, you will receive by email the download links for the PDF and the interactive HTML version. Delivery is immediate (usually in under 60 seconds). If you do not receive the links within 1 hour, check your spam folder or write to us on WhatsApp.</p>
      <h3>5. Use of Content</h3>
      <p>The content is for your exclusive personal use. Reselling, redistributing, publicly sharing, or reproducing totally or partially the content without written authorization from Netwheels is strictly prohibited. All rights reserved.</p>
      <h3>6. Refunds</h3>
      <p>We offer a 7-day satisfaction guarantee from the purchase date. Check the details in our Refund Policy.</p>
      <h3>7. Limitation of Liability</h3>
      <p>The content of the books is provided "as is", without express or implied warranties beyond those explicitly stated. Netwheels is not responsible for personal interpretations, decisions made based on the content, or specific outcomes in personal relationships.</p>
      <h3>8. Modifications</h3>
      <p>We may update these terms from time to time. The current version will always be posted on this site.</p>
      <h3>9. Applicable Law</h3>
      <p>These terms are governed by the laws of the Republic of Ecuador.</p>
      <h3>10. Contact</h3>
      <p>WhatsApp: <a href="https://wa.me/593968473255" target="_blank" rel="noopener noreferrer">+593 96 847 3255</a><br>Email: <a href="mailto:edwardsmurillo@hotmail.com">edwardsmurillo@hotmail.com</a></p>
    `,
    privacy_title: "Privacy Policy",
    privacy_body: `
      <h3>What data do we collect?</h3>
      <p>When you register or buy, we collect your email, phone number, and name to deliver our digital products. Additionally, if you give us your express consent through our cookie notice, we capture your IP address and browser type to improve our services.</p>
      <h3>What do we use it for?</h3>
      <p>Mainly, we use your data to provide you with access to the material you requested and to offer support. Only with your authorization do we share certain securely encrypted data with Meta (Facebook/Instagram) to measure the effectiveness of our ads and show you relevant content using the Conversions API.</p>
      <h3>Your rights</h3>
      <p>You can opt out of the use of your data for marketing and analysis purposes at any time. We will never sell your personal data to third parties under any circumstances. You can request the deletion of your data by writing to our support email.</p>
    `
  },
  pt: {
    ft_terms: "Termos e condições",
    ft_privacy: "Política de privacidade",
    refund_title: "Política de Reembolso",
    refund_body: `
      <h3>Produtos digitais</h3>
      <p>A Netwheels vende exclusivamente produtos digitais (PDF e HTML interativo) com entrega imediata via e-mail. Pela própria natureza do produto, uma vez acessado e baixado o conteúdo, ele não pode ser devolvido em sentido físico.</p>
      <h3>Garantia de satisfação de 7 dias</h3>
      <p>Se depois de ler seu livro você sentir que ele não é para você, escreva para nós nos primeiros 7 dias corridos a partir da compra e processaremos o reembolso de 100% do valor pago, sem perguntas estranhas. Só pedimos que nos conte brevemente o que você esperava e não encontrou — essa informação nos ajuda a melhorar.</p>
      <h3>Como solicitar um reembolso</h3>
      <p>Escreva para nós pelo WhatsApp no <a href="https://wa.me/593968473255" target="_blank" rel="noopener noreferrer">+593 96 847 3255</a> ou por e-mail em <a href="mailto:edwardsmurillo@hotmail.com">edwardsmurillo@hotmail.com</a>.</p>
      <ul>
        <li>Inclua o e-mail com o qual realizou a compra e o título do livro.</li>
        <li>O reembolso será processado no método de pagamento original em um prazo de 5 a 10 dias úteis, dependendo do seu banco ou intermediador de pagamento.</li>
      </ul>
      <h3>Casos não cobertos</h3>
      <ul>
        <li>Solicitações feitas após 7 dias da data de compra.</li>
        <li>Disputas ou reembolsos solicitados diretamente ao banco sem antes entrar em contato conosco.</li>
        <li>Reclamações por insatisfação com o tom ou abordagem do conteúdo caso o cliente já tenha consumido mais de 80% do material.</li>
      </ul>
      <h3>Contato</h3>
      <p>Para qualquer dúvida sobre esta política, escreva para nós pelo WhatsApp <a href="https://wa.me/593968473255" target="_blank" rel="noopener noreferrer">+593 96 847 3255</a> ou por e-mail em <a href="mailto:edwardsmurillo@hotmail.com">edwardsmurillo@hotmail.com</a>. Respondemos em horário comercial GMT-5 (Equador).</p>
      <p>Esta política é regida pelas leis da República do Equador e respeita a Lei Orgânica de Defesa do Consumidor.</p>
    `,
    terms_title: "Termos e condições",
    terms_body: `
      <h3>1. Sobre a Netwheels</h3>
      <p>A Netwheels é uma marca de conteúdo educacional digital com base no Equador. Por meio deste site vendemos guias digitais (PDF + HTML interativo) sobre intimidade, relacionamentos e comunicação de casal. Todo o conteúdo é destinado a maiores de 18 anos (+18).</p>
      <h3>2. Aceitação destes termos</h3>
      <p>Ao usar este site ou comprar qualquer produto, você confirma que é maior de idade e aceita estes Termos de Serviço em sua totalidade. Se você não concordar, solicitamos que não use o site nem realize compras.</p>
      <h3>3. Natureza do Conteúdo</h3>
      <p>Nossos livros são material educativo e de reflexão. Não constituem aconselhamento médico, psicológico ou sexológico, e não substituem a consulta com um profissional de saúde. Se você tiver alguma preocupação de saúde, recomendamos conversar com um especialista de confiança.</p>
      <h3>4. Entrega e Acesso</h3>
      <p>Assim que o pagamento for processado, você receberá por e-mail os links de download do PDF e da versão HTML interativa. A entrega é imediata (geralmente em menos de 60 segundos). Si você não receber os links em até 1 hora, verifique sua pasta de spam ou escreva para nós pelo WhatsApp.</p>
      <h3>5. Uso do Conteúdo</h3>
      <p>O conteúdo é para seu uso pessoal exclusivo. Não é permitido revender, redistribuir, compartilhar publicamente ou reproduzir total ou parcialmente o conteúdo sem autorização por escrito da Netwheels. Todos os direitos reservados.</p>
      <h3>6. Reembolsos</h3>
      <p>Oferecemos uma garantia de satisfação de 7 dias a partir da data da compra. Veja os detalhes na nossa Política de Reembolso.</p>
      <h3>7. Limitação de Responsabilidade</h3>
      <p>O conteúdo dos livros é entregue como está, sem garantias expressas ou implícitas além das explicitamente indicadas. A Netwheels não se responsabiliza por interpretações pessoais, decisões tomadas com base no conteúdo ou resultados específicos em relacionamentos de casal.</p>
      <h3>8. Modificações</h3>
      <p>Podemos atualizar estes termos ocasionalmente. A versão vigente sempre estará publicada neste site.</p>
      <h3>9. Lei Aplicável</h3>
      <p>Estes termos são regidos pelas leis da República do Equador.</p>
      <h3>10. Contato</h3>
      <p>WhatsApp: <a href="https://wa.me/593968473255" target="_blank" rel="noopener noreferrer">+593 96 847 3255</a><br>E-mail: <a href="mailto:edwardsmurillo@hotmail.com">edwardsmurillo@hotmail.com</a></p>
    `,
    privacy_title: "Política de privacidade",
    privacy_body: `
      <h3>Quais dados coletamos?</h3>
      <p>Quando você se cadastra ou compra, coletamos seu e-mail, número de telefone e nome para entregar nossos produtos digitais. Além disso, se você nos der seu consentimento expresso por meio do nosso aviso de cookies, capturamos seu endereço IP e tipo de navegador para melhorar nossos serviços.</p>
      <h3>Para que os usamos?</h3>
      <p>Principalmente, usamos seus dados para fornecer acesso ao material que você solicitou e para oferecer suporte. Apenas com sua autorização, compartilhamos certos dados (criptografados de forma segura) com a Meta (Facebook/Instagram) para medir a eficácia de nossos anúncios e mostrar conteúdo relevante usando a API de Conversões.</p>
      <h3>Seus direitos</h3>
      <p>Você pode recusar o uso de seus dados para fins de marketing e análise a qualquer momento. Nunca venderemos seus dados pessoais a terceiros sob nenhuma circunstância. Você pode solicitar a exclusão de seus dados escrevendo para o nosso e-mail de suporte.</p>
    `
  }
};

function openPolicyModal(type) {
  const currentLang = typeof LANG !== 'undefined' ? LANG : 'es';
  const texts = POLICY_TEXTS[currentLang] || POLICY_TEXTS['es'];
  
  const titleEl = document.getElementById('policyTitle');
  const bodyEl = document.getElementById('policyBody');
  const modalEl = document.getElementById('policyModal');
  
  if (type === 'refund') {
    titleEl.textContent = texts.refund_title;
    bodyEl.innerHTML = texts.refund_body;
  } else if (type === 'terms') {
    titleEl.textContent = texts.terms_title;
    bodyEl.innerHTML = texts.terms_body;
  } else if (type === 'privacy') {
    titleEl.textContent = texts.privacy_title;
    bodyEl.innerHTML = texts.privacy_body;
  }
  
  modalEl.classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closePolicyModal() {
  const modalEl = document.getElementById('policyModal');
  modalEl.classList.remove('active');
  document.body.style.overflow = '';
}

// Close on outside click
document.addEventListener('DOMContentLoaded', () => {
  const modalEl = document.getElementById('policyModal');
  if (modalEl) {
    modalEl.addEventListener('click', (e) => {
      if (e.target === modalEl) {
        closePolicyModal();
      }
    });
  }
});
