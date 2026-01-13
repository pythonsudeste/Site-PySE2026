export default function Mapa() {
    return(<>
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3090.6502243315963!2d-43.20631539333571!3d-22.897755013130592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997ffd350ce55b%3A0xd2a3198dbb7e306d!2sPorto%20Maravalley!5e0!3m2!1spt-BR!2sus!4v1768314051543!5m2!1spt-BR!2sus"
            style={{
              border: 0,
              width: "70vw",
              maxWidth : "660px",
              height: "300px",
              borderRadius : "20px"
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa do Google"
        />
    </>)
}