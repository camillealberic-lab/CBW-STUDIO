import Navbar from '@/components/Navbar'
import PageHero from '@/components/PageHero'
import CtaBannerReveal from '@/components/CtaBannerReveal'
import Footer from '@/components/Footer'
import FooterParallax from '@/components/FooterParallax'

const FONT = 'var(--font-geologica), system-ui, sans-serif'

const SECTIONS = [
  {
    title: '1. Responsable du traitement',
    content: `CBW Studio, auto-entrepreneur représenté par Camille Breton, est responsable du traitement de vos données personnelles. Pour toute question relative à la présente politique, vous pouvez nous contacter à l'adresse suivante : contact@cbwstudio.fr.`,
  },
  {
    title: '2. Données collectées',
    content: `Dans le cadre de l'utilisation de notre site et de nos services, nous pouvons être amenés à collecter les données suivantes : nom et prénom, adresse e-mail, numéro de téléphone (si fourni volontairement), informations relatives à votre projet ou votre entreprise, données de navigation (cookies, adresse IP, pages visitées). Ces données sont collectées lorsque vous remplissez un formulaire de contact, lorsque vous réservez un appel via notre outil de prise de rendez-vous, ou lors de votre navigation sur le site.`,
  },
  {
    title: '3. Finalités du traitement',
    content: `Vos données personnelles sont traitées pour les finalités suivantes : répondre à vos demandes de contact et devis, gérer la relation commerciale et l'exécution de nos prestations, améliorer notre site et nos services, respecter nos obligations légales et réglementaires. Nous ne traitons vos données que dans le cadre des bases légales suivantes : votre consentement (pour les communications marketing), l'exécution d'un contrat (pour la gestion de votre projet), notre intérêt légitime (pour l'amélioration de nos services).`,
  },
  {
    title: '4. Durée de conservation',
    content: `Vos données sont conservées pour la durée strictement nécessaire aux finalités pour lesquelles elles ont été collectées. À titre indicatif : les données de prospects sont conservées 3 ans à compter du dernier contact, les données clients sont conservées 5 ans après la fin de la relation commerciale, les données de facturation sont conservées 10 ans conformément aux obligations comptables légales. À l'issue de ces délais, vos données sont supprimées ou anonymisées.`,
  },
  {
    title: '5. Partage des données',
    content: `Nous ne vendons pas vos données personnelles à des tiers. Vos données peuvent être partagées avec des prestataires techniques qui nous aident à exploiter notre site et nos services (hébergeur, outil de prise de rendez-vous, outil d'emailing), dans le strict cadre de l'exécution de leur mission et sous réserve qu'ils présentent des garanties suffisantes quant à la protection de vos données. Ces prestataires agissent en qualité de sous-traitants et sont soumis à une obligation de confidentialité.`,
  },
  {
    title: '6. Vos droits',
    content: `Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants sur vos données : droit d'accès, droit de rectification, droit à l'effacement (« droit à l'oubli »), droit à la limitation du traitement, droit à la portabilité, droit d'opposition. Pour exercer ces droits, contactez-nous à contact@cbwstudio.fr en joignant une copie d'un justificatif d'identité. Vous avez également le droit d'introduire une réclamation auprès de la CNIL (www.cnil.fr).`,
  },
  {
    title: '7. Cookies',
    content: `Notre site utilise des cookies techniques nécessaires à son bon fonctionnement. Nous pouvons également utiliser des cookies analytiques pour mesurer l'audience de notre site. Vous pouvez paramétrer votre navigateur pour refuser ou supprimer ces cookies. Le refus des cookies techniques peut affecter le bon fonctionnement du site. Aucun cookie publicitaire ou de profilage n'est déposé sans votre consentement préalable.`,
  },
  {
    title: '8. Sécurité',
    content: `Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte, destruction ou altération. Notre site est hébergé sur des serveurs sécurisés et les échanges de données sont chiffrés via le protocole HTTPS.`,
  },
  {
    title: '9. Modifications',
    content: `La présente politique de confidentialité peut être modifiée à tout moment pour refléter les évolutions légales, réglementaires ou techniques. La date de la dernière mise à jour est indiquée en bas de cette page. Nous vous encourageons à la consulter régulièrement.`,
  },
]

export default function PolitiqueConfidentialitePage() {
  return (
    <div style={{ backgroundColor: '#F4EEE4' }}>
      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />

        <PageHero prefix="Politique de" highlight="confidentialité." />

        <main style={{ backgroundColor: '#F4EEE4' }}>
          <div style={{ padding: '80px 50px 120px', maxWidth: '760px' }}>
          <p
            style={{
              fontFamily: FONT,
              fontSize: '14px',
              color: 'rgba(26,26,23,0.5)',
              marginBottom: '64px',
              lineHeight: 1.7,
            }}
          >
            Dernière mise à jour : 27 avril 2026. CBW Studio s'engage à protéger la vie privée des utilisateurs de son site. Cette politique décrit comment nous collectons, utilisons et protégeons vos données personnelles.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {SECTIONS.map((s) => (
              <div key={s.title}>
                <h2
                  style={{
                    fontFamily: FONT,
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#1A1A17',
                    marginBottom: '16px',
                    lineHeight: 1.3,
                  }}
                >
                  {s.title}
                </h2>
                <p
                  style={{
                    fontFamily: FONT,
                    fontSize: '14px',
                    color: 'rgba(26,26,23,0.7)',
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  {s.content}
                </p>
              </div>
            ))}
          </div>
          </div>
        </main>

        <CtaBannerReveal />
      </div>
      <FooterParallax>
        <Footer />
      </FooterParallax>
    </div>
  )
}
