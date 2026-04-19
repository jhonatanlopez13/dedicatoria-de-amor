// import React, { useMemo, useState } from 'react';
// import { Heart, Music, BookOpen, Printer, Quote, QrCode } from 'lucide-react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const App = () => {
//   const [onlyQR, setOnlyQR] = useState(false);

//   const rawData = [
//     { frase: "Eres mi lugar favorito en el mundo y mi paz en los días grises.", poema: "Amo como ama el amor. No conozco otra razón para amar que amarte.", cancion: "Perfect - Ed Sheeran", url: "https://www.youtube.com/watch?v=2Vv-BfVoq4g" },
//     { frase: "Mi vida es mucho más bonita desde que tú caminas a mi lado.", poema: "Te quiero no por lo que eres, sino por lo que soy cuando estoy contigo.", cancion: "Bésame Mucho - Andrea Bocelli", url: "https://www.youtube.com/watch?v=gS0Y_IatS9c" },
//     { frase: "Si me dieran a elegir de nuevo, te elegiría a ti mil veces más.", poema: "Estar contigo o no estar contigo es la medida de mi tiempo.", cancion: "Yellow - Coldplay", url: "https://www.youtube.com/watch?v=yKNxeF4KMsY" },
//     { frase: "Gracias por ser mi amor, mi cómplice y mi mejor amigo/a.", poema: "Cultivo una rosa blanca de puro amor, para el ser que me da su mano franca.", cancion: "A Thousand Years - Christina Perri", url: "https://www.youtube.com/watch?v=rtOvBOTyXFE" },
//     { frase: "Tus abrazos son mi refugio y el único lugar donde me siento en casa.", poema: "Quiero hacer contigo lo que la primavera hace con los cerezos.", cancion: "Solamente Tú - Pablo Alborán", url: "https://www.youtube.com/watch?v=F0rwOsAteXM" },
//     { frase: "Eres la respuesta a todas las oraciones que nunca supe que estaba haciendo.", poema: "Amo tu alegría y tu sueño, y tu paso en la calle del destino.", cancion: "All of Me - John Legend", url: "https://www.youtube.com/watch?v=450p7goxZqg" },
//     { frase: "No te quiero para un rato, te quiero para todos los 'siempre' que nos queden.", poema: "Si me olvidas, quiero que sepas una cosa... yo jamás dejaré de buscarte.", cancion: "Thinking Out Loud - Ed Sheeran", url: "https://www.youtube.com/watch?v=lp-EO5I60KA" },
//     { frase: "Tu amor es el regalo más grande que la vida me ha dado jamás.", poema: "Te amo sin saber cómo, ni cuándo, ni de dónde, te amo directamente.", cancion: "La Vie En Rose - Edith Piaf", url: "https://www.youtube.com/watch?v=kFzViYkZAz4" },
//     { frase: "Contigo cada pequeño detalle se convierte en un momento mágico.", poema: "El alma que hablar puede con los ojos, también puede besar con la mirada.", cancion: "Can't Help Falling in Love - Elvis Presley", url: "https://www.youtube.com/watch?v=vGJTaP6anOU" },
//     { frase: "Eres el sueño hecho realidad que nunca quiero dejar de vivir.", poema: "No es que muera de amor, muero de ti. Muero de ti, amor, de amor de ti.", cancion: "Contigo Aprendí - Armando Manzanero", url: "https://www.youtube.com/watch?v=vV1p8P5XUYo" },
//     { frase: "Amo la persona en la que me convierto cuando estoy contigo.", poema: "Para mi corazón basta tu pecho, para tu libertad bastan mis alas.", cancion: "Something - The Beatles", url: "https://www.youtube.com/watch?v=UelDrZ1aKAs" },
//     { frase: "Cada día te amo un poco más que ayer y mucho menos que mañana.", poema: "Tengo miedo de verte, necesidad de verte, esperanza de verte.", cancion: "Bachata Rosa - Juan Luis Guerra", url: "https://youtu.be/WfMO_AETgB0?si=eEOQLCsoRjxBdv8N" },
//     { frase: "Eres mi sol en las mañanas y mi luna en las noches.", poema: "Hagamos un trato: yo no te digo nada y tú me lo dices todo con un beso.", cancion: "Love of My Life - Queen", url: "https://www.youtube.com/watch?v=v3xwCkhmies" },
//     { frase: "Tu risa es la banda sonora favorita de mi vida.", poema: "Me gustas cuando callas porque estás como ausente, y me oyes desde lejos.", cancion: "Amor Eterno - Juan Gabriel", url: "https://www.youtube.com/watch?v=0_u3_e2A7vQ" },
//     { frase: "Nuestro amor es mi aventura favorita y el viaje que nunca quiero terminar.", poema: "Tu risa me hace libre, me pone alas. Soledades me quita, cárcel me arranca.", cancion: "Stay With Me - Sam Smith", url: "https://www.youtube.com/watch?v=pB-5XG-DbAA" },
//     { frase: "En tus ojos veo el futuro que quiero construir cada día.", poema: "No digas que, agotado su tesoro, de asuntos falta, enmudeció la lira.", cancion: "Sabor a Mí - Luis Miguel", url: "https://www.youtube.com/watch?v=gsV1_40InF0" },
//     { frase: "Gracias por hacerme sentir la persona más afortunada del planeta.", poema: "Es tan corto el amor y tan largo el olvido, pero lo nuestro es eterno.", cancion: "Just the Way You Are - Bruno Mars", url: "https://www.youtube.com/watch?v=LjhCEhWiKXk" },
//     { frase: "Amo nuestras risas, nuestras charlas y hasta nuestros silencios.", poema: "Podrá faltarme el aire, pero nunca tus besos que son mi alimento.", cancion: "Rayando el Sol - Maná", url: "https://youtu.be/8lbsQyMhMT8?si=t69yic8ku_0bscuT" },
//     { frase: "Eres el 'te amo' más honesto que he dicho jamás.", poema: "Si el amor es ciego, ¿por qué te encontré con tanta claridad?", cancion: "Halo - Beyoncé", url: "https://www.youtube.com/watch?v=bnVUHWCynxc" },
//     { frase: "Me encantas así, tal cual eres, sin cambiarle nada.", poema: "Andábamos sin buscarnos pero sabiendo que andábamos para encontrarnos.", cancion: "Oye Mi Amor - Maná", url: "https://www.youtube.com/watch?v=rE7p9Ie9_2U" },
//     { frase: "Eres mi principio, mi medio y mi fin.", poema: "Vivir sin tu amor es estar en la oscuridad de un mundo sin sol.", cancion: "I Will Always Love You - Whitney Houston", url: "https://www.youtube.com/watch?v=3JWTaaS7LdU" },
//     { frase: "A tu lado, el mundo tiene mucho más sentido.", poema: "Eres el verso que siempre quise escribir en el libro de mi vida.", cancion: "Entra En Mi Vida - Sin Bandera", url: "https://www.youtube.com/watch?v=-ojm9mSTdIs" },
//     { frase: "Me haces mejor persona solo por estar en mi vida.", poema: "El amor es un secreto que los ojos no saben guardar frente a ti.", cancion: "My Heart Will Go On - Celine Dion", url: "https://www.youtube.com/watch?v=3gK_2XdjOdY" },
//     { frase: "No necesito nada más si te tengo a ti.", poema: "Si te sueño es porque te quiero, si te quiero es porque te amo.", cancion: "Kilómetros - Sin Bandera", url: "https://youtu.be/oR5rpFzaBaA?si=2NPzgyZ3nvaYyDxe" },
//     { frase: "Eres la razón por la que siempre tengo una sonrisa en los labios.", poema: "No busques el amor, deja que el amor de nosotros nos guíe siempre.", cancion: "Someone Like You - Adele", url: "https://www.youtube.com/watch?v=hLQl3WQQoQ0" },
//     { frase: "Cada beso tuyo es una promesa que quiero cumplir para siempre.", poema: "La luna envidia tu luz y el sol se rinde ante tu calor.", cancion: "Te Amo - Franco de Vita", url: "https://www.youtube.com/watch?v=vVj4u_3nN5k" },
//     { frase: "Contigo aprendí lo que realmente significa amar.", poema: "Dos almas, un solo pensamiento; dos corazones, un solo latido por ti.", cancion: "Unchained Melody - Righteous Brothers", url: "https://youtu.be/jLw5jYDivGc?si=gQ2g6f3WsQl66SmU" },
//     { frase: "Eres mi felicidad constante y mi mayor orgullo.", poema: "Te amo desde el primer suspiro hasta el último latido que me quede.", cancion: "Fotografía - Juanes", url: "https://www.youtube.com/watch?v=pAnHov_F5uU" },
//     { frase: "Simplemente gracias por ser tú y por quererme así.", poema: "Eres el rayo de luz que ilumina mi sendero en la noche.", cancion: "Marry You - Bruno Mars", url: "https://www.youtube.com/watch?v=OMr9zCvtOfY" },
//     { frase: "Te elegiría a ti en cien vidas y en mil mundos.", poema: "Ni la distancia ni el tiempo podrán borrar este fuego por ti.", cancion: "Para Siempre - Kany García", url: "https://youtu.be/ieBvA3kMJB4?si=moBcvzKhlWooSLWc" },
//     { frase: "Desde que llegaste mi vida cambió, eres mi bendición.", poema: "Te busqué en mis sueños y te encontré en mi realidad.", cancion: "Desde que llegaste - Juan Luis Guerra", url: "https://youtu.be/weKJWqw8-3g?si=QlUJo6ZYDedo4vsd" }
//   ];

//   const romanticCards = useMemo(() => {
//     const colors = [
//       { bg: 'bg-rose-50', border: 'border-rose-300', text: 'text-rose-900', accent: 'text-rose-600' },
//       { bg: 'bg-pink-50', border: 'border-pink-300', text: 'text-pink-900', accent: 'text-pink-600' },
//       { bg: 'bg-purple-50', border: 'border-purple-300', text: 'text-purple-900', accent: 'text-purple-600' },
//       { bg: 'bg-orange-50', border: 'border-orange-300', text: 'text-orange-900', accent: 'text-orange-600' },
//     ];
//     return rawData.map((item, index) => ({
//       ...item,
//       id: index + 1,
//       contentType: (index === 30) ? 2 : index % 3,
//       style: colors[index % colors.length]
//     }));
//   }, []);

//   const generateQR = (url) => `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}&color=8B1E3F&bgcolor=ffffff&margin=1&qzone=2`;

//   const handlePrintOnlyQR = () => {
//     setOnlyQR(true);
//     setTimeout(() => {
//       window.print();
//       setOnlyQR(false);
//     }, 150);
//   };

//   return (
//     <div className={`min-vh-100 ${onlyQR ? 'mode-qr-active' : ''}`} style={{ background: 'linear-gradient(135deg, #fff5f5 0%, #fff0f7 50%, #f5f0ff 100%)' }}>
//       <header className="container py-5 text-center d-print-none">
//         <h1 className="display-4 fw-bold mb-4" style={{ color: '#9b2c2c' }}>Colección de 31 Cartas</h1>
//         <div className="d-flex justify-content-center gap-3">
//           <button onClick={() => window.print()} className="btn btn-danger btn-lg rounded-pill shadow px-4">
//             <Printer size={20} className="me-2" /> Imprimir Todo
//           </button>
//           <button onClick={handlePrintOnlyQR} className="btn btn-dark btn-lg rounded-pill shadow px-4">
//             <QrCode size={20} className="me-2" /> Solo Códigos QR
//           </button>
//         </div>
//       </header>

//       <div className="container pb-5">
//         <div className="row g-4 row-cols-1 row-cols-sm-2 row-cols-lg-3">
//           {romanticCards.map((card) => (
//             <div key={card.id} className={`col print-wrapper ${card.contentType !== 2 ? 'hide-in-qr-mode' : 'show-in-qr-mode'}`}>
//               <div className={`card h-100 border-2 ${card.style.border} shadow-lg hover-scale`}
//                 style={{
//                   backgroundColor: card.style.bg.replace('bg-rose-50', '#fff1f2').replace('bg-pink-50', '#fdf2f8').replace('bg-purple-50', '#faf5ff').replace('bg-orange-50', '#fff7ed'),
//                   borderColor: card.style.border.replace('border-rose-300', '#fda4af').replace('border-pink-300', '#f9a8d4').replace('border-purple-300', '#d8b4fe').replace('border-orange-300', '#fdba74'),
//                   minHeight: '330px',
//                   printColorAdjust: 'exact', WebkitPrintColorAdjust: 'exact'
//                 }}>
//                 <div className="card-header bg-white border-bottom text-center py-2">
//                   <span className={`display-6 fw-bold ${card.style.accent}`}>#{card.id}</span>
//                 </div>
//                 <div className="card-body d-flex flex-column align-items-center justify-content-center text-center p-4">
//                   {card.contentType === 0 && (
//                     <div className="card-content">
//                       <Quote size={40} className={`${card.style.accent} opacity-25 mb-2`} />
//                       <p className={`h5 fw-bold ${card.style.text}`}>"{card.frase}"</p>
//                     </div>
//                   )}
//                   {card.contentType === 1 && (
//                     <div className="card-content">
//                       <div className={`${card.style.accent} small fw-bold text-uppercase mb-2`}><BookOpen size={14} /> Poema</div>
//                       <p className={`${card.style.text} fst-italic h6 lh-base`}>"{card.poema}"</p>
//                     </div>
//                   )}
//                   {card.contentType === 2 && (
//                     <div className="card-content d-flex flex-column align-items-center w-100">
//                       <div className="bg-white p-2 rounded shadow-sm mb-3" style={{ border: '1px solid #eee' }}>
//                         <img src={generateQR(card.url)} alt="QR" style={{ width: '120px', height: '120px' }} />
//                       </div>
//                       <p className={`fw-bold small ${card.style.text} border-top pt-2 w-100`}>{card.cancion}</p>
//                     </div>
//                   )}
//                 </div>
//                 <div className="card-footer bg-white border-top text-center py-2">
//                   <small className={card.style.accent}>{card.contentType === 2 ? "🎵" : card.contentType === 1 ? "✨" : "❤️"}</small>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style>{`
//         /* ESTILOS DE PANTALLA */
//         .hover-scale { transition: transform 0.3s ease; }
//         .hover-scale:hover { transform: translateY(-5px); }

//         /* ESTILOS DE IMPRESIÓN */
//         @media print {
//           .d-print-none { display: none !important; }
//           body { background: white !important; }
//           @page { size: A4; margin: 1cm; }
          
//           /* Mantenemos la cuadrícula original de 2 columnas en impresión */
//           .row { 
//             display: grid !important; 
//             grid-template-columns: 1fr 1fr !important; 
//             gap: 15px !important; 
//             width: 100% !important;
//           }

//           /* Forzamos que cada tarjeta ocupe su espacio original */
//           .col { 
//             height: 350px !important; 
//             width: 100% !important;
//             display: block !important;
//             page-break-inside: avoid !important;
//           }

//           /* Salto de página cada 4 tarjetas para mantener el orden */
//           .col:nth-child(4n) { page-break-after: always; }

//           /* SI ESTÁ ACTIVO EL MODO SOLO QR:
//              Ocultamos las tarjetas que NO son QR pero MANTENEMOS su espacio 
//              o las removemos del flujo sin estirar las demás. */
//           .mode-qr-active .hide-in-qr-mode {
//              display: none !important;
//           }
          
//           .card { 
//             height: 100% !important; 
//             border: 2px solid !important; 
//             visibility: visible !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default App;


import React, { useMemo, useState } from 'react';
// Eliminamos Heart y Music que no se usaban
import { BookOpen, Printer, Quote, QrCode } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [onlyQR, setOnlyQR] = useState(false);

  const rawData = [
    { frase: "Eres mi lugar favorito en el mundo y mi paz en los días grises.", poema: "Amo como ama el amor. No conozco otra razón para amar que amarte.", cancion: "Perfect - Ed Sheeran", url: "https://www.youtube.com/watch?v=2Vv-BfVoq4g" },
    { frase: "Mi vida es mucho más bonita desde que tú caminas a mi lado.", poema: "Te quiero no por lo que eres, sino por lo que soy cuando estoy contigo.", cancion: "Bésame Mucho - Andrea Bocelli", url: "https://www.youtube.com/watch?v=gS0Y_IatS9c" },
    { frase: "Si me dieran a elegir de nuevo, te elegiría a ti mil veces más.", poema: "Estar contigo o no estar contigo es la medida de mi tiempo.", cancion: "Yellow - Coldplay", url: "https://www.youtube.com/watch?v=yKNxeF4KMsY" },
    { frase: "Gracias por ser mi amor, mi cómplice y mi mejor amigo/a.", poema: "Cultivo una rosa blanca de puro amor, para el ser que me da su mano franca.", cancion: "A Thousand Years - Christina Perri", url: "https://www.youtube.com/watch?v=rtOvBOTyXFE" },
    { frase: "Tus abrazos son mi refugio y el único lugar donde me siento en casa.", poema: "Quiero hacer contigo lo que la primavera hace con los cerezos.", cancion: "Solamente Tú - Pablo Alborán", url: "https://www.youtube.com/watch?v=F0rwOsAteXM" },
    { frase: "Eres la respuesta a todas las oraciones que nunca supe que estaba haciendo.", poema: "Amo tu alegría y tu sueño, y tu paso en la calle del destino.", cancion: "All of Me - John Legend", url: "https://www.youtube.com/watch?v=450p7goxZqg" },
    { frase: "No te quiero para un rato, te quiero para todos los 'siempre' que nos queden.", poema: "Si me olvidas, quiero que sepas una cosa... yo jamás dejaré de buscarte.", cancion: "Thinking Out Loud - Ed Sheeran", url: "https://www.youtube.com/watch?v=lp-EO5I60KA" },
    { frase: "Tu amor es el regalo más grande que la vida me ha dado jamás.", poema: "Te amo sin saber cómo, ni cuándo, ni de dónde, te amo directamente.", cancion: "La Vie En Rose - Edith Piaf", url: "https://www.youtube.com/watch?v=kFzViYkZAz4" },
    { frase: "Contigo cada pequeño detalle se convierte en un momento mágico.", poema: "El alma que hablar puede con los ojos, también puede besar con la mirada.", cancion: "Can't Help Falling in Love - Elvis Presley", url: "https://www.youtube.com/watch?v=vGJTaP6anOU" },
    { frase: "Eres el sueño hecho realidad que nunca quiero dejar de vivir.", poema: "No es que muera de amor, muero de ti. Muero de ti, amor, de amor de ti.", cancion: "Contigo Aprendí - Armando Manzanero", url: "https://www.youtube.com/watch?v=vV1p8P5XUYo" },
    { frase: "Amo la persona en la que me convierto cuando estoy contigo.", poema: "Para mi corazón basta tu pecho, para tu libertad bastan mis alas.", cancion: "Something - The Beatles", url: "https://www.youtube.com/watch?v=UelDrZ1aKAs" },
    { frase: "Cada día te amo un poco más que ayer y mucho menos que mañana.", poema: "Tengo miedo de verte, necesidad de verte, esperanza de verte.", cancion: "Bachata Rosa - Juan Luis Guerra", url: "https://youtu.be/WfMO_AETgB0?si=eEOQLCsoRjxBdv8N" },
    { frase: "Eres mi sol en las mañanas y mi luna en las noches.", poema: "Hagamos un trato: yo no te digo nada y tú me lo dices todo con un beso.", cancion: "Love of My Life - Queen", url: "https://www.youtube.com/watch?v=v3xwCkhmies" },
    { frase: "Tu risa es la banda sonora favorita de mi vida.", poema: "Me gustas cuando callas porque estás como ausente, y me oyes desde lejos.", cancion: "Amor Eterno - Juan Gabriel", url: "https://www.youtube.com/watch?v=0_u3_e2A7vQ" },
    { frase: "Nuestro amor es mi aventura favorita y el viaje que nunca quiero terminar.", poema: "Tu risa me hace libre, me pone alas. Soledades me quita, cárcel me arranca.", cancion: "Stay With Me - Sam Smith", url: "https://www.youtube.com/watch?v=pB-5XG-DbAA" },
    { frase: "En tus ojos veo el futuro que quiero construir cada día.", poema: "No digas que, agotado su tesoro, de asuntos falta, enmudeció la lira.", cancion: "Sabor a Mí - Luis Miguel", url: "https://www.youtube.com/watch?v=gsV1_40InF0" },
    { frase: "Gracias por hacerme sentir la persona más afortunada del planeta.", poema: "Es tan corto el amor y tan largo el olvido, pero lo nuestro es eterno.", cancion: "Just the Way You Are - Bruno Mars", url: "https://www.youtube.com/watch?v=LjhCEhWiKXk" },
    { frase: "Amo nuestras risas, nuestras charlas y hasta nuestros silencios.", poema: "Podrá faltarme el aire, pero nunca tus besos que son mi alimento.", cancion: "Rayando el Sol - Maná", url: "https://youtu.be/8lbsQyMhMT8?si=t69yic8ku_0bscuT" },
    { frase: "Eres el 'te amo' más honesto que he dicho jamás.", poema: "Si el amor es ciego, ¿por qué te encontré con tanta claridad?", cancion: "Halo - Beyoncé", url: "https://www.youtube.com/watch?v=bnVUHWCynxc" },
    { frase: "Me encantas así, tal cual eres, sin cambiarle nada.", poema: "Andábamos sin buscarnos pero sabiendo que andábamos para encontrarnos.", cancion: "Oye Mi Amor - Maná", url: "https://www.youtube.com/watch?v=rE7p9Ie9_2U" },
    { frase: "Eres mi principio, mi medio y mi fin.", poema: "Vivir sin tu amor es estar en la oscuridad de un mundo sin sol.", cancion: "I Will Always Love You - Whitney Houston", url: "https://www.youtube.com/watch?v=3JWTaaS7LdU" },
    { frase: "A tu lado, el mundo tiene mucho más sentido.", poema: "Eres el verso que siempre quise escribir en el libro de mi vida.", cancion: "Entra En Mi Vida - Sin Bandera", url: "https://www.youtube.com/watch?v=-ojm9mSTdIs" },
    { frase: "Me haces mejor persona solo por estar en mi vida.", poema: "El amor es un secreto que los ojos no saben guardar frente a ti.", cancion: "My Heart Will Go On - Celine Dion", url: "https://www.youtube.com/watch?v=3gK_2XdjOdY" },
    { frase: "No necesito nada más si te tengo a ti.", poema: "Si te sueño es porque te quiero, si te quiero es porque te amo.", cancion: "Kilómetros - Sin Bandera", url: "https://youtu.be/oR5rpFzaBaA?si=2NPzgyZ3nvaYyDxe" },
    { frase: "Eres la razón por la que siempre tengo una sonrisa en los labios.", poema: "No busques el amor, deja que el amor de nosotros nos guíe siempre.", cancion: "Someone Like You - Adele", url: "https://www.youtube.com/watch?v=hLQl3WQQoQ0" },
    { frase: "Cada beso tuyo es una promesa que quiero cumplir para siempre.", poema: "La luna envidia tu luz y el sol se rinde ante tu calor.", cancion: "Te Amo - Franco de Vita", url: "https://www.youtube.com/watch?v=vVj4u_3nN5k" },
    { frase: "Contigo aprendí lo que realmente significa amar.", poema: "Dos almas, un solo pensamiento; dos corazones, un solo latido por ti.", cancion: "Unchained Melody - Righteous Brothers", url: "https://youtu.be/jLw5jYDivGc?si=gQ2g6f3WsQl66SmU" },
    { frase: "Eres mi felicidad constante y mi mayor orgullo.", poema: "Te amo desde el primer suspiro hasta el último latido que me quede.", cancion: "Fotografía - Juanes", url: "https://www.youtube.com/watch?v=pAnHov_F5uU" },
    { frase: "Simplemente gracias por ser tú y por quererme así.", poema: "Eres el rayo de luz que ilumina mi sendero en la noche.", cancion: "Marry You - Bruno Mars", url: "https://www.youtube.com/watch?v=OMr9zCvtOfY" },
    { frase: "Te elegiría a ti en cien vidas y en mil mundos.", poema: "Ni la distancia ni el tiempo podrán borrar este fuego por ti.", cancion: "Para Siempre - Kany García", url: "https://youtu.be/ieBvA3kMJB4?si=moBcvzKhlWooSLWc" },
    { frase: "Desde que llegaste mi vida cambió, eres mi bendición.", poema: "Te busqué en mis sueños y te encontré en mi realidad.", cancion: "Desde que llegaste - Juan Luis Guerra", url: "https://youtu.be/weKJWqw8-3g?si=QlUJo6ZYDedo4vsd" }
  ];

  const romanticCards = useMemo(() => {
    const colors = [
      { bg: 'bg-rose-50', border: 'border-rose-300', text: 'text-rose-900', accent: 'text-rose-600' },
      { bg: 'bg-pink-50', border: 'border-pink-300', text: 'text-pink-900', accent: 'text-pink-600' },
      { bg: 'bg-purple-50', border: 'border-purple-300', text: 'text-purple-900', accent: 'text-purple-600' },
      { bg: 'bg-orange-50', border: 'border-orange-300', text: 'text-orange-900', accent: 'text-orange-600' },
    ];
    return rawData.map((item, index) => ({
      ...item,
      id: index + 1,
      contentType: (index === 30) ? 2 : index % 3,
      style: colors[index % colors.length]
    }));
  }, [rawData]); // ✅ Agregamos rawData como dependencia

  const generateQR = (url) => `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}&color=8B1E3F&bgcolor=ffffff&margin=1&qzone=2`;

  const handlePrintOnlyQR = () => {
    setOnlyQR(true);
    setTimeout(() => {
      window.print();
      setOnlyQR(false);
    }, 150);
  };

  return (
    <div className={`min-vh-100 ${onlyQR ? 'mode-qr-active' : ''}`} style={{ background: 'linear-gradient(135deg, #fff5f5 0%, #fff0f7 50%, #f5f0ff 100%)' }}>
      <header className="container py-5 text-center d-print-none">
        <h1 className="display-4 fw-bold mb-4" style={{ color: '#9b2c2c' }}>Colección de 31 Cartas</h1>
        <div className="d-flex justify-content-center gap-3">
          <button onClick={() => window.print()} className="btn btn-danger btn-lg rounded-pill shadow px-4">
            <Printer size={20} className="me-2" /> Imprimir Todo
          </button>
          <button onClick={handlePrintOnlyQR} className="btn btn-dark btn-lg rounded-pill shadow px-4">
            <QrCode size={20} className="me-2" /> Solo Códigos QR
          </button>
        </div>
      </header>

      <div className="container pb-5">
        <div className="row g-4 row-cols-1 row-cols-sm-2 row-cols-lg-3">
          {romanticCards.map((card) => (
            <div key={card.id} className={`col print-wrapper ${card.contentType !== 2 ? 'hide-in-qr-mode' : 'show-in-qr-mode'}`}>
              <div className={`card h-100 border-2 ${card.style.border} shadow-lg hover-scale`}
                style={{
                  backgroundColor: card.style.bg.replace('bg-rose-50', '#fff1f2').replace('bg-pink-50', '#fdf2f8').replace('bg-purple-50', '#faf5ff').replace('bg-orange-50', '#fff7ed'),
                  borderColor: card.style.border.replace('border-rose-300', '#fda4af').replace('border-pink-300', '#f9a8d4').replace('border-purple-300', '#d8b4fe').replace('border-orange-300', '#fdba74'),
                  minHeight: '330px',
                  printColorAdjust: 'exact', WebkitPrintColorAdjust: 'exact'
                }}>
                <div className="card-header bg-white border-bottom text-center py-2">
                  <span className={`display-6 fw-bold ${card.style.accent}`}>#{card.id}</span>
                </div>
                <div className="card-body d-flex flex-column align-items-center justify-content-center text-center p-4">
                  {card.contentType === 0 && (
                    <div className="card-content">
                      <Quote size={40} className={`${card.style.accent} opacity-25 mb-2`} />
                      <p className={`h5 fw-bold ${card.style.text}`}>"{card.frase}"</p>
                    </div>
                  )}
                  {card.contentType === 1 && (
                    <div className="card-content">
                      <div className={`${card.style.accent} small fw-bold text-uppercase mb-2`}><BookOpen size={14} /> Poema</div>
                      <p className={`${card.style.text} fst-italic h6 lh-base`}>"{card.poema}"</p>
                    </div>
                  )}
                  {card.contentType === 2 && (
                    <div className="card-content d-flex flex-column align-items-center w-100">
                      <div className="bg-white p-2 rounded shadow-sm mb-3" style={{ border: '1px solid #eee' }}>
                        <img src={generateQR(card.url)} alt="QR" style={{ width: '120px', height: '120px' }} />
                      </div>
                      <p className={`fw-bold small ${card.style.text} border-top pt-2 w-100`}>{card.cancion}</p>
                    </div>
                  )}
                </div>
                <div className="card-footer bg-white border-top text-center py-2">
                  <small className={card.style.accent}>{card.contentType === 2 ? "🎵" : card.contentType === 1 ? "✨" : "❤️"}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* ESTILOS DE PANTALLA */
        .hover-scale { transition: transform 0.3s ease; }
        .hover-scale:hover { transform: translateY(-5px); }

        /* ESTILOS DE IMPRESIÓN */
        @media print {
          .d-print-none { display: none !important; }
          body { background: white !important; }
          @page { size: A4; margin: 1cm; }
          
          /* Mantenemos la cuadrícula original de 2 columnas en impresión */
          .row { 
            display: grid !important; 
            grid-template-columns: 1fr 1fr !important; 
            gap: 15px !important; 
            width: 100% !important;
          }

          /* Forzamos que cada tarjeta ocupe su espacio original */
          .col { 
            height: 350px !important; 
            width: 100% !important;
            display: block !important;
            page-break-inside: avoid !important;
          }

          /* Salto de página cada 4 tarjetas para mantener el orden */
          .col:nth-child(4n) { page-break-after: always; }

          /* SI ESTÁ ACTIVO EL MODO SOLO QR:
             Ocultamos las tarjetas que NO son QR pero MANTENEMOS su espacio 
             o las removemos del flujo sin estirar las demás. */
          .mode-qr-active .hide-in-qr-mode {
             display: none !important;
          }
          
          .card { 
            height: 100% !important; 
            border: 2px solid !important; 
            visibility: visible !important;
          }
        }
      `}</style>
    </div>
  );
};

export default App;