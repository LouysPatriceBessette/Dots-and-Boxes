 
import { Bold, Italic, Apos, Quot, TourBlankLine, Hr, Anchor, RedText } from "./translations.components.styled"

// Édouard Lucas Wikipedia links
const wikilinks = {
  EN: 'https://en.wikipedia.org/wiki/%C3%89douard_Lucas',
  FR: 'https://fr.wikipedia.org/wiki/%C3%89douard_Lucas',
  ES: 'https://es.wikipedia.org/wiki/%C3%89douard_Lucas',
  DE: 'https://de.wikipedia.org/wiki/%C3%89douard_Lucas',
  IT: 'https://it.wikipedia.org/wiki/%C3%89douard_Lucas',
  NL: 'https://nl.wikipedia.org/wiki/%C3%89douard_Lucas',
  RU: 'https://ru.wikipedia.org/wiki/%D0%9B%D1%8E%D0%BA%D0%B0,_%D0%A4%D1%80%D0%B0%D0%BD%D1%81%D1%83%D0%B0_%D0%AD%D0%B4%D1%83%D0%B0%D1%80%D0%B4_%D0%90%D0%BD%D0%B0%D1%82%D0%BE%D0%BB%D1%8C',
  ZH: 'https://zh.wikipedia.org/wiki/%E7%88%B1%E5%BE%B7%E5%8D%8E%C2%B7%E5%8D%A2%E5%8D%A1%E6%96%AF',
  JA: 'https://ja.wikipedia.org/wiki/%E3%82%A8%E3%83%89%E3%82%A5%E3%82%A2%E3%83%BC%E3%83%AB%E3%83%BB%E3%83%AA%E3%83%A5%E3%82%AB',
  KO: 'https://ko.wikipedia.org/wiki/%EC%97%90%EB%91%90%EC%95%84%EB%A5%B4_%EB%A4%BC%EC%B9%B4',
  PT: 'https://pt.wikipedia.org/wiki/%C3%89douard_Lucas',
  HT: 'https://ht.wikipedia.org/wiki/Edouard_Lucas',
}

export const tourTranslations = {
  EN: {
    'Tour Dialog title': `Welcome to Dots and Boxes!`,
    'Tour Dialog P1': <>
      <p>
        This game was described created by <Anchor href={wikilinks['EN']}><Bold>Édouard Lucas</Bold></Anchor>, a renowned French mathematician, in his book <Quot/><Italic>Jeux scientifiques pour servir à l<Apos/>histoire</Italic><Quot/>. He died two years later, on October 3, 1991, at the age of 49.
      </p>
      <Hr/>
    </>,
    'Tour Dialog P2': <p>
      Make the guided tour to learn about the user interface of this web version of the game and about the game rules.
    </p>,
    'Tour Dialog button': 'Start the tour',

    'Intro 1 title': <div>Pay attention to the <b><RedText>red</RedText></b> arrow.</div>,
    'Intro 1 description': <>
      <div>In this case, it refers to the number of potential players currently on the site.</div>
      <div><TourBlankLine/></div>
      <div>This number includes you.</div>
    </>,


    'Intro 2 title': <div>Future development...</div>,
    'Intro 2 description': <>
      <div>You<Apos/>ll be able to request to play with them.</div>
      <div><TourBlankLine/></div>
      <div>But for now, you need to invite one of your friends directly.</div>
    </>,



    'Intro 3 title': <div>Let<Apos/>s begin!</div>,
    'Intro 3 description': <>
      <div>There must be two players.</div>
      <div>The player who starts the game is player 1.</div>
    </>,

    'Player 1 name title': <div>Player 1<Apos/>s name</div>,
    'Player 1 name description': <>
          <div>His/her name is on the left.</div>
          <div>If you create the game, your name will be there.</div>
        </>,

    'Player 1 score title': <div>Player 1<Apos/>s scoring</div>,
    'Player 1 score description':  <div>For each box the player closes, one point is awarded.</div>,

    'Player 2 name title': <div>Player 2<Apos/>s name</div>,
    'Player 2 name description': <div>If you join a game, your name will be on the left.</div>,

    'Player 2 score title': <div>Player 2<Apos/>s Scoring</div>,
    'Player 2 score description': <div>For each box the player closes, one point is awarded.</div>,

    'Play grid title': <div>Game Grid</div>,
    'Play grid description': <>
          <div>The grid is made up of squares.</div>
          <div><TourBlankLine/></div>
          <div>This one is a <Bold>2</Bold> x <Bold>2</Bold> grid.</div>
          <div>It can be of different dimensions.</div>
          <div>For example: <Bold>6</Bold> x <Bold>8</Bold></div>
        </>,

    'Controls drawer button title': <div>Controls</div>,
    'Controls drawer button description': <div>This button opens a control panel.</div>,

    'Create game title': <div>Create</div>,
    'Create game description': <div>This button opens the game creation form.</div>,

    'Create name input title': <div>Your name.</div>,
    'Create name input description':  <div>Let<Apos/>s say your name is John...</div>,








    'Meeeeh title': <div>Meeeeh...</div>,
    'Meeeeh description': <>
      <div>UNDEFINED</div>
      <div></div>
      <div></div>
    </>,
  },
  FR: {
    'Tour Dialog title': `Bienvenue dans Dots and Boxes !`,
    'Tour Dialog P1': <>
      <p>
        Ce jeu a été décrit par <Anchor href={wikilinks['FR']}><Bold>Édouard Lucas</Bold></Anchor>, un mathématicien français renommé, dans son livre <Quot/><Italic>Jeux scientifiques pour servir à l<Apos/>histoire</Italic><Quot/>. Il est décédé deux ans plus tard, le 3 octobre 1991, à l<Apos/>âge de 49 ans.
      </p>
      <Hr/>
    </>,
    'Tour Dialog P2': <p>
      Faites la visite guidée pour découvrir l<Apos/>interface utilisateur de cette version web ainsi que les règles du jeu.
    </p>,
    'Tour Dialog button': 'Commencer le tour',

    'Intro 1 title': <div>Portez attention à la flèche <b><RedText>rouge</RedText></b>.</div>,
    'Intro 1 description': <>
      <div>Dans ce cas-ci, il s<Apos/>agit du nombre de joueurs potentiels qui sont actuellement sur le site.</div>
      <div><TourBlankLine/></div>
      <div>Ce nombre vous inclus.</div>
    </>,

    'Intro 2 title': <div>Développement futur...</div>,
    'Intro 2 description': <>
          <div>Vous pourrez leur faire une demande pour jouer avec eux. </div>
          <div><TourBlankLine/></div>
          <div>Mais pour le moment, il faut inviter un de vos amis directement.</div>
        </>,

    'Intro 3 title': <div>Débutons!</div>,
    'Intro 3 description': <>
          <div>Il doit y avoir deux joueurs.</div>
          <div>Le joueur qui crée la partie est le joueur 1.</div>
        </>,

    'Player 1 name title': <div>Nom du joueur 1</div>,
    'Player 1 name description': <>
          <div>Son nom est à gauche.</div>
          <div>Si vous créez la partie, votre nom sera là.</div>
        </>,

    'Player 1 score title': <div>Pointage du joueur 1</div>,
    'Player 1 score description':  <div>Pour chaque boîte que le joueur ferme, un point lui est attribué.</div>,

    'Player 2 name title': <div>Nom du joueur 2</div>,
    'Player 2 name description': <div>Si vous rejoignez une partie, votre nom sera à gauche.</div>,

    'Player 2 score title': <div>Pointage du Joueur 2</div>,
    'Player 2 score description': <div>Pour chaque boîte que le joueur ferme, un point lui est attribué.</div>,

    'Play grid title': <div>Grille de jeu</div>,
    'Play grid description': <>
          <div>La grille est composée de boites.</div>
          <div><TourBlankLine/></div>
          <div>Ici, il s<Apos/>agit d<Apos/>une grille de <Bold>2</Bold> x <Bold>2</Bold>.</div>
          <div>Elle peut être de dimensions différente.</div>
          <div>Par exemple: <Bold>6</Bold> x <Bold>8</Bold></div>
        </>,

    'Controls drawer button title': <div>Contrôles</div>,
    'Controls drawer button description': <div>Ce boutton ouvre un panneau de contrôle.</div>,

    'Create game title': <div>Créer</div>,
    'Create game description': <div>Ce boutton ouvre un le formulaire de création de partie.</div>,

    'Create name input title': <div>Votre nom</div>,
    'Create name input description': <div>Disons que votre nom est John...</div>,











    'Meeeeh title': <div>Meeeeh...</div>,
    'Meeeeh description': <>
      <div>INDÉFINI</div>
      <div></div>
      <div></div>
    </>,

    // 'Meeeeh title': <div>Meeeeh...</div>,
    // 'Meeeeh description': <>
    //   <div>UNDEFINED</div>
    //   <div></div>
    //   <div></div>
    // </>,
    // 'Meeeeh title': <div>Meeeeh...</div>,
    // 'Meeeeh description': <>
    //   <div>UNDEFINED</div>
    //   <div></div>
    //   <div></div>
    // </>,

    // 'Meeeeh title': <div>Meeeeh...</div>,
    // 'Meeeeh description': <>
    //   <div>UNDEFINED</div>
    //   <div></div>
    //   <div></div>
    // </>,

    // 'Meeeeh title': <div>Meeeeh...</div>,
    // 'Meeeeh description': <>
    //   <div>UNDEFINED</div>
    //   <div></div>
    //   <div></div>
    // </>,

    // 'Meeeeh title': <div>Meeeeh...</div>,
    // 'Meeeeh description': <>
    //   <div>UNDEFINED</div>
    //   <div></div>
    //   <div></div>
    // </>,

  },
  ES: {
    'Tour Dialog title': `¡Bienvenido a Dots and Boxes!`,
    'Tour Dialog P1': <>
      <p>
        Este juego fue descrito por <Anchor href={wikilinks['ES']}><Bold>Édouard Lucas</Bold></Anchor>, un renombrado matemático francés, en su libro <Quot/><Italic>Jeux scientifiques pour servir à l<Apos/>histoire</Italic><Quot/>. Murió dos años después, el 3 de octubre de 1991, a la edad de 49 años.
      </p>
      <Hr/>
    </>,
    'Tour Dialog P2': <p>
      Realiza la visita guiada para aprender sobre la interfaz de usuario de esta versión web del juego y sobre las reglas del juego.
    </p>,
    'Tour Dialog button': 'Iniciar el tour',
  },
  DE: {
    'Tour Dialog title': `Willkommen bei Dots and Boxes!`,
    'Tour Dialog P1': <>
      <p>
        Dieses Spiel wurde von <Anchor href={wikilinks['DE']}><Bold>Édouard Lucas</Bold></Anchor>, einem bekannten französischen Mathematiker, in seinem Buch <Quot/><Italic>Jeux scientifiques pour servir à l<Apos/>histoire</Italic><Quot/> beschrieben. Er starb zwei Jahre später, am 3. Oktober 1991, im Alter von 49 Jahren.
      </p>
      <Hr/>
    </>,
    'Tour Dialog P2': <p>
      Machen Sie die geführte Tour, um die Benutzeroberfläche dieser Webversion des Spiels und die Spielregeln kennenzulernen.
    </p>,
    'Tour Dialog button': 'Die Tour starten',
  },
  IT: {
    'Tour Dialog title': `Benvenuto in Dots and Boxes!`,
    'Tour Dialog P1': <>
      <p>
        Questo gioco è stato descritto da <Anchor href={wikilinks['IT']}><Bold>Édouard Lucas</Bold></Anchor>, un rinomato matematico francese, nel suo libro <Quot/><Italic>Jeux scientifiques pour servir à l<Apos/>histoire</Italic><Quot/>. È morto due anni dopo, il 3 ottobre 1991, all<Apos/>età di 49 anni.
      </p>
      <Hr/>
    </>,
    'Tour Dialog P2': <p>
      Fai il tour guidato per conoscere l<Apos/>interfaccia utente di questa versione web del gioco e le regole del gioco.
    </p>,
    'Tour Dialog button': 'Inizia il tour',
  },
  NL: {
    'Tour Dialog title': `Welkom bij Dots and Boxes!`,
    'Tour Dialog P1': <>
      <p>
        Dit spel werd beschreven door <Anchor href={wikilinks['NL']}><Bold>Édouard Lucas</Bold></Anchor>, een gerenommeerde Franse wiskundige, in zijn boek <Quot/><Italic>Jeux scientifiques pour servir à l<Apos/>histoire</Italic><Quot/>. Hij stierf twee jaar later, op 3 oktober 1991, op de leeftijd van 49 jaar.
      </p>
      <Hr/>
    </>,
    'Tour Dialog P2': <p>
      Maak de rondleiding om kennis te maken met de gebruikersinterface van deze webversie van het spel en met de spelregels.
    </p>,
    'Tour Dialog button': 'Begin de tour',
  },
  RU: {
    'Tour Dialog title': `Добро пожаловать в Dots and Boxes!`,
    'Tour Dialog P1': <>
      <p>
        Эта игра была описана <Anchor href={wikilinks['RU']}><Bold>Эдвардом Люкасом</Bold></Anchor>, известным французским математиком, в его книге <Quot/><Italic>Jeux scientifiques pour servir à l<Apos/>histoire</Italic><Quot/>. Он умер два года спустя, 3 октября 1991 года, в возрасте 49 лет.
      </p>
      <Hr/>
    </>,
    'Tour Dialog P2': <p>
      Пройдите обучающий тур, чтобы ознакомиться с интерфейсом пользователя этой веб-версии игры и правилами игры.
    </p>,
    'Tour Dialog button': 'Начать тур',
  },
  ZH: {
    'Tour Dialog title': `欢迎来到 Dots and Boxes！`,
    'Tour Dialog P1': <>
      <p>
        这个游戏由 <Anchor href={wikilinks['ZH']}><Bold>爱德华·卢卡斯</Bold></Anchor>，一位著名的法国数学家，在他的书 <Quot/><Italic>Jeux scientifiques pour servir à l<Apos/>histoire</Italic><Quot/> 中描述。他于1991年10月3日去世，享年49岁。
      </p>
      <Hr/>
    </>,
    'Tour Dialog P2': <p>
      进行指导游览，了解此游戏网络版本的用户界面及其游戏规则。
    </p>,
    'Tour Dialog button': '开始 tour',
  },
  JA: {
    'Tour Dialog title': `Dots and Boxesへようこそ！`,
    'Tour Dialog P1': <>
      <p>
        このゲームは、<Anchor href={wikilinks['JA']}><Bold>エドゥアール・リュカス</Bold></Anchor>という名高いフランスの数学者によって、その著書 <Quot/><Italic>Jeux scientifiques pour servir à l<Apos/>histoire</Italic><Quot/>で説明されました。彼は1991年10月3日に49歳で亡くなりました。
      </p>
      <Hr/>
    </>,
    'Tour Dialog P2': <p>
      ガイドツアーでこのゲームのウェブ版のユーザーインターフェースとルールを学びましょう。
    </p>,
    'Tour Dialog button': 'ツアーを開始',
  },
  KO: {
    'Tour Dialog title': `Dots and Boxes에 오신 것을 환영합니다!`,
    'Tour Dialog P1': <>
      <p>
        이 게임은 프랑스의 저명한 수학자 <Anchor href={wikilinks['KO']}><Bold>에두아르 뤼카스</Bold></Anchor>에 의해 그의 저서 <Quot/><Italic>Jeux scientifiques pour servir à l<Apos/>histoire</Italic><Quot/>에서 설명되었습니다. 그는 1991년 10월 3일, 49세의 나이로 사망했습니다.
      </p>
      <Hr/>
    </>,
    'Tour Dialog P2': <p>
      가이드는 이 게임의 웹 버전 사용자 인터페이스와 게임 규칙에 대해 알아보는 투어입니다.
    </p>,
    'Tour Dialog button': '투어 시작하기',
  },
  PT: {
    'Tour Dialog title': `Bem-vindo ao Dots and Boxes!`,
    'Tour Dialog P1': <>
      <p>
        Este jogo foi descrito por <Anchor href={wikilinks['PT']}><Bold>Édouard Lucas</Bold></Anchor>, um renomado matemático francês, em seu livro <Quot/><Italic>Jeux scientifiques pour servir à l<Apos/>histoire</Italic><Quot/>. Ele morreu dois anos depois, em 3 de outubro de 1991, aos 49 anos.
      </p>
      <Hr/>
    </>,
    'Tour Dialog P2': <p>
      Faça o tour guiado para aprender sobre a interface do usuário desta versão web do jogo e sobre as regras do jogo.
    </p>,
    'Tour Dialog button': 'Começar o tour',
  },
  HT: {
    'Tour Dialog title': `Byenveni nan Dots and Boxes!`,
    'Tour Dialog P1': <>
      <p>
        Jwè sa a te dekri pa <Anchor href={wikilinks['HT']}><Bold>Édouard Lucas</Bold></Anchor>, yon matematisyen Franse renome, nan liv li <Quot/><Italic>Jeux scientifiques pour servir à l<Apos/>histoire</Italic><Quot/>. Li te mouri de zan apre, sou 3 oktòb 1991, nan laj 49 an.
      </p>
      <Hr/>
    </>,
    'Tour Dialog P2': <p>
      Fè tour gid la pou aprann sou entèfas itilizatè a nan vèsyon entènèt sa a nan jwèt la ak sou règ jwèt la.
    </p>,
    'Tour Dialog button': 'Kòmanse tour la',
  },
}