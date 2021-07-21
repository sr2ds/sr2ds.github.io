<template>
  <div class="Home">
    <div class="welcome">
      <p>Seja bem-vindo!</p>
      <p>
        Tenho estudando e trabalhando com tecnologia há pouco mais de dez anos.
      </p>
      <p>
        Sempre tive vontade de contar minha tragetória de uma forma simples,
        talvez ainda não seja o ideal mas aqui está uma linha do tempo (em desenvolvimento) com
        alguns detalhes. 
      </p>
      <p>Espero que de alguma forma isso motivar você em sua
        jornada, o caminho não é fácil, tão pouco rápido mas certamente vale a
        pena!
      </p>
    </div>
    <hr />
    
    <TimeLine :moments="moments" />
  </div>
</template>

<script>
import TimeLine from "@/components/TimeLine";

export default {
  name: "Home",
  components: {
    TimeLine,
  },
  data() {
    return {
      moments: [
        {
          date: new Date("2010-11"),
          title: "",
          description:
            "Novembro de 2010, um salve imenso pro Leandro Santos. Comecei a trabalhar com suporte de software aqui e em poucos meses consegui a primeira oportunidade de colocar a mão em Linux profissionalmente, virei suporte de redes. O trabalho era ajudar os usuários, arrumar impressora, formatar, etc. Eu era ajudante de um grande cara, seu nome é Gustavo Salaberry. Aprendi muito com ele, eu achava fascinante o cara sabia tudo, era surreal pra mim. Me lembro com detalhes de ver ele colocando em produção o primeiro servidor virtualizado da empresa, era um Xen Server. Eu nunca tinha visto virtualização de servidores até então (esse momento me ajudou a replicar no futuro, quando deixei de ser o ajudante e fiquei a frente da implementação em outra empresa).",
          category: "Analista de Suporte",
          icon: "code",
          color: "white",
          tags: [
            "Linux",
            "Suporte",
            "Active Directory",
            "Samba",
            "DHCP",
            "Zimbra",
            "Postfix",
            "Cups",
            "PHP",
          ],
        },
        {
          date: new Date("2010-03"),
          title: "",
          description:
            "R$ 498,33. Foi o valor mensal que eu me comprometi a pagar no boleto, no nome da minha vó pois eu era menor e não tinha cartão de crédito e nem nome para me aprovarem. Eu devia ganhar uns R$ 600,00 na época como auxiliar de escritório, eu ficava sem dinheiro mas sentia que estava realizando um sonho. Inclusive, um abraço para o Charles que era meu patrão na época, eu precisava pagar a matricula e ele teve o bom coração de me ajudar 💚. Nesse pacote, eu fiz três cursos de Linux na 4Linux, aprendi desde compilar o Kernel até montar um servidor de arquivos, web, email, proxy, etc.. Gratidão a todos os meus professores que me ajudarão nessa fase (e em todas as outras). Me lembro que era bem cansativo, eu trabalhava de segunda a sábado e fazia o curso de domingo, não tinha muita grana e nunca achei justo pedir ajuda para minha família que também não tinha, então literalmente meu lanche real eram os coffe-breaks da 4Linux.",
          category: "Aux de aux administrativo",
          icon: "code",
          color: "white",
          tags: [
            "Linux",
            "Debian",
            "GNU/Linux",
            "LVM",
            "PAM",
            "DHCP",
            "FTP",
            "NFS",
            "NIS",
            "Samba",
            "DNS",
            "Apache",
            "Sendmail",
            "Postfix",
            "LDAP",
            "Iptables",
            "Squid",
          ],
        },
        {
          date: new Date("2007"),
          title: "",
          description:
            "Em meados de 2006 eu já olhava para tecnologia com olhos de fascínio. Entre os 13 e 15 anos de idade tive meus primeiros contatos com Linux e Hardware. Eu 'tentava' arrumar o computador dos vizinhos para ganhar uns trocados, nessa época também arrumei um 'bico' em uma LanHouse (Eletric Generation - Lan House [um abraço, Hamilton de Sarzedo-MG!] e aprendi algumas coisinhas de redes locais, internet, etc.",
          // thumbnail: "/images/vuetimeline,/initial_d.jpg",
          tags: [
            "Hardware",
            "Linux",
            "Mandriva",
            "Compiz Fusion",
            "Windows XP",
            "TCP/IP",
          ],
          category: "Curioso",
          icon: "code",
          color: "green",
        },
      ],
    };
  },
};
</script>

<style>
.Home hr {
  margin-bottom: 80px;
}

.Home .welcome {
  color: white;
  padding: 1.2rem;
  font-size: 18px;
}
.Home .updates {
  color: white;
  font-size: 18px;
  padding: 1.2rem;
}

.Home .btn > button {
  font-size: 1.2rem;
  width: 70vw;
  color: white;
  display: flex;
  margin: 0 auto;
  background-color: #009cd6;
  border: solid 1px #006bb9;
  border-radius: 7px;
  padding: 1rem 0;
  justify-content: center;
  cursor: pointer;
  text-decoration: inherit;
  font-size: 24px;
  box-shadow: 1px 1px black;
  transition: opacity 0.2s;
}

.Home .btn > button:hover {
  background-color: #006bb9;
  opacity: 0.6;
}
.Home a.btn {
  display: flex;
  text-decoration: inherit;
  text-align: center;
}

.Home .picture {
  border-radius: 50%;
  display: flex;
  border: solid 5px #006bb9;
  margin: 0 auto;
  margin-bottom: 0.8rem;
}
</style>
