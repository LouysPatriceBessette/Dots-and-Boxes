 
import { Bold, Italic, Apos, Quot, TourBlankLine, Hr, Anchor, RedText } from './translations.components.styled'

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
    'Tour Dialog title': 'Welcome to Dots and Boxes!',
    'Tour Dialog P1': <>
      <p>
        This game was described by <Anchor href={wikilinks['EN']}><Bold>Édouard Lucas</Bold></Anchor>, a renowned French mathematician, in his book <Quot/><Italic>Jeux scientifiques pour servir à l<Apos/>histoire</Italic><Quot/> (Scientific Games to Serve History). He passed away two years later, on October 3, 1991, at the age of 49.
      </p>
      <Hr/>
    </>,
    'Tour Dialog P2': <p>
      Take the guided tour to discover the user interface of this web version as well as the rules of the game.
    </p>,
    'Tour Dialog button': 'Start the tour',

    'Intro 1 title': <div>Pay attention to the <b><RedText>red</RedText></b> arrow.</div>,
    'Intro 1 description': <>
      <div>In this case, it refers to the number of potential players currently on the site.</div>
      <div><TourBlankLine/></div>
      <div>This number includes you.</div>
    </>,

    'Intro 2 title': <div>Future Development...</div>,
    'Intro 2 description': <>
      <div>You can request to play with them.</div>
      <div><TourBlankLine/></div>
      <div>But for now, you need to invite one of your friends directly.</div>
    </>,

    'Intro 3 title': <div>Let<Apos/>s get started!</div>,
    'Intro 3 description': <>
      <div>There must be two players.</div>
      <div>Player 1 creates the game.</div>
    </>,

    'Player 1 name title': <div>Player 1 Name</div>,
    'Player 1 name description': <>
      <div>Their name is on the left.</div>
      <div>If you create the game, your name will be there.</div>
    </>,

    'Player 1 score title': <div>Player 1 Score</div>,
    'Player 1 score description': <div>For each box that Player 1 closes, one point is awarded to them.</div>,

    'Player 2 name title': <div>Player 2 Name</div>,
    'Player 2 name description': <div>If you join a game, your name will be on the left.</div>,

    'Player 2 score title': <div>Player 2 Score</div>,
    'Player 2 score description': <div>For each box that Player 2 closes, one point is awarded to them.</div>,

    'Play grid title': <div>Play Grid</div>,
    'Play grid description': <>
      <div>The grid is made up of boxes.</div>
      <div><TourBlankLine/></div>
      <div>In this case, it is a <Bold>2</Bold> x <Bold>2</Bold> grid.</div>
      <div>It can be of different dimensions.</div>
      <div>For example: <Bold>6</Bold> x <Bold>8</Bold></div>
    </>,

    'Controls drawer button title': <div>Controls</div>,
    'Controls drawer button description': <div>This button opens a control panel.</div>,

    'Create game title': <div>Create</div>,
    'Create game description': <div>This button opens the game creation form.</div>,

    'Create name input title': <div>Your Name</div>,
    'Create name input description': <div>Let<Apos/>s say your name is Bertha...</div>,

    'Create game grid title': <div>Adjust the Dimensions</div>,
    'Create game grid description': <>
      <div>Use the sliders. The grid will adjust and give you a visual idea of the result.</div>
      <div><TourBlankLine/></div>
      <div>Note that on a mobile device, a width of more than <Bold>6</Bold> forces the user to use a <Quot/>Pinch Zoom<Quot/> to see the entire grid.</div>
    </>,
    
    'Join game title': <div>Join</div>,
    'Join game description': <div>This button opens the form to join a game.</div>,

    'Join game input title': <div>Your Friend<Apos/>s Name</div>,
    'Join game input description': <div>Let<Apos/>s say your name is Horacio...</div>,

    'Join game pin title': <div>Game Number</div>,
    'Join game pin description': <div>Your friend must enter the number you provided to them.</div>,

    'Leave/Delete game title': <div>Leave / Delete</div>,
    'Leave/Delete game description': <>
      <div>This button allows you to leave a game.</div>
      <div><TourBlankLine/></div>
      <div>If there is only one player, the game is deleted.</div>
    </>,
    'More title': <div>More</div>,
    'More description': <div>This button reveals more options.</div>,

    'Less title': <div>Less</div>,
    'Less description': <div>This button returns to the initial options.</div>,

    'Tour title': <div>Guided Tour</div>,
    'Tour description': <div>You know what this button does!</div>,

    'Language title': <div>Languages</div>,
    'Language description': <div>To choose another translation.</div>,

    'Chat title': <div>Chat Button</div>,
    'Chat description': <>
      <div>This button opens the chat panel.</div>
      <div>It is only available when there is another player in the game.</div>
      <div><TourBlankLine/></div>
      <div>Even if they are offline.</div>
    </>,

    'Chat drawer title': <div>Chat Panel</div>,
    'Chat drawer description': <>
      <div>Chat in real-time!</div>
      <div><TourBlankLine/></div>
      <div>
        Like on a social network, except the other person won<Apos/>t receive a notification.
        If they are offline, they will see their messages upon their next login.
      </div>
    </>,

    'Chat messages title': <div>Messages</div>,
    'Chat messages description': <>
      <div>Messages appear here.</div>
      <div>The name of the person appears before the message.</div>
    </>,

    'Chat input title': <div>Message Input</div>,
    'Chat input description': <>
      <div>Type here.</div>
      <div><TourBlankLine/></div>
      <div>If the other person is online and they have closed their chat panel, it will automatically reopen.</div>
    </>,

    'Game over title': <div>Game Over</div>,
    'Game over description': <>
      <div>You can start a new game with the same player.</div>
      <div><TourBlankLine/></div>
      <div>The grid will be the same size.</div>
    </>
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
      <div>Dans ce cas-ci, il s<Apos/>agit du nombre de joueur·euses potentiels qui sont actuellement sur le site.</div>
      <div><TourBlankLine/></div>
      <div>Ce nombre vous inclus.</div>
    </>,

    'Intro 2 title': <div>Développement futur...</div>,
    'Intro 2 description': <>
          <div>Vous pourrez leur faire une demande pour jouer avec iels. </div>
          <div><TourBlankLine/></div>
          <div>Mais pour le moment, il faut inviter un·e de vos ami.es directement.</div>
        </>,

    'Intro 3 title': <div>Débutons!</div>,
    'Intro 3 description': <>
          <div>Il doit y avoir deux joueur·euses.</div>
          <div>Joueur·euse 1 crée la partie.</div>
        </>,

    'Player 1 name title': <div>Nom de Joueur·euse 1</div>,
    'Player 1 name description': <>
          <div>Son nom est à gauche.</div>
          <div>Si vous créez la partie, votre nom sera là.</div>
        </>,

    'Player 1 score title': <div>Pointage de Joueur·euse 1</div>,
    'Player 1 score description':  <div>Pour chaque boîte que Joueur·euse 1 ferme, un point lui est attribué.</div>,

    'Player 2 name title': <div>Nom de Joueur·euse 2</div>,
    'Player 2 name description': <div>Si vous rejoignez une partie, votre nom sera à gauche.</div>,

    'Player 2 score title': <div>Pointage de Joueur·euse 2</div>,
    'Player 2 score description': <div>Pour chaque boîte que Joueur·euse 2 ferme, un point lui est attribué.</div>,

    'Play grid title': <div>Grille de jeu</div>,
    'Play grid description': <>
          <div>La grille est composée de boites.</div>
          <div><TourBlankLine/></div>
          <div>Ici, il s<Apos/>agit d<Apos/>une grille de <Bold>2</Bold> x <Bold>2</Bold>.</div>
          <div>Elle peut être de dimensions différente.</div>
          <div>Par exemple: <Bold>6</Bold> x <Bold>8</Bold></div>
        </>,

    'Controls drawer button title': <div>Contrôles</div>,
    'Controls drawer button description': <div>Ce bouton ouvre un panneau de contrôle.</div>,

    'Create game title': <div>Créer</div>,
    'Create game description': <div>Ce bouton ouvre le formulaire de création de partie.</div>,

    'Create name input title': <div>Votre nom</div>,
    'Create name input description': <div>Disons que votre nom est Bertha...</div>,

    'Create game grid title': <div>Ajustez les dimensions</div>,
    'Create game grid description':  <>
      <div>Utilisez les curseurs. La grille s<Apos/>ajustera vous donnera une idée visuelle du résultat.</div>
      <div><TourBlankLine/></div>
      <div>À noter que sur un appareil mobile, une largeur de plus de <Bold>6</Bold> force l<Apos/>utilisateur·euse à faire un <Quot/>Zoom par pincement<Quot/> pour voir l<Apos/>ensemble de la grille.</div>
    </>,

    'Join game title': <div>Joindre</div>,
    'Join game description': <div>Ce bouton ouvre le formulaire pour joindre une partie.</div>,

    'Join game input title': <div>Nom de votre ami.e</div>,
    'Join game input description': <div>Disons que votre nom est Horacio...</div>,

    'Join game pin title': <div>Game number</div>,
    'Join game pin description': <div>Votre ami.e doit entrer le numéro que vous lui avez donné.</div>,

    'Leave/Delete game title': <div>Quitter / Supprimer</div>,
    'Leave/Delete game description': <>
      <div>Ce bouton permet de quitter une partie.</div>
      <div><TourBlankLine/></div>
      <div>S<Apos/>il n<Apos/>y a qu<Apos/>un·e seul·e joueur·euse, la partie est supprimée.</div>
    </>,
    'More title': <div>Plus</div>,
    'More description':  <div>Ce bouton révèle plus de boutons.</div>,

    'Less title': <div>Moins</div>,
    'Less description': <div>Ce bouton revient vers les premiers boutons.</div>,

    'Tour title': <div>Visite guidée</div>,
    'Tour description': <div>Vous savez ce que ce bouton fait!</div>,

    'Language title': <div>Langues</div>,
    'Language description': <div>Pour choisir une autre traduction.</div>,

    'Chat title': <div>Bouton de discussion</div>,
    'Chat description': <>
      <div>Ce bouton ouvre le panneau de discussion.</div>
      <div>Il n<Apos/>est disponible que lorsqu<Apos/>il y a un·e autre joueur·euse dans la partie.</div>
      <div><TourBlankLine/></div>
      <div>Et ce, même s<Apos/>iel est hors-ligne.</div>
    </>,

    'Chat drawer title': <div>Panneau de dicussion</div>,
    'Chat drawer description': <>
      <div>Discutez en temps réel!</div>
      <div><TourBlankLine/></div>
      <div>
        Comme sur un réseau social, sauf que l<Apos/>autre personne ne recevra pas de notification.
        s<Apos/>iel est hors ligne, iel verra ses messages à sa prochaine connexion.
      </div>
    </>,

    'Chat messages title': <div>Messages</div>,
    'Chat messages description': <>
      <div>Les messages apparaîssent ici.</div>
      <div>Le nom de la personne apparaît devant le message.</div>
    </>,

    'Chat input title': <div>Saisie de message</div>,
    'Chat input description': <>
      <div>Écrivez ici.</div>
      <div><TourBlankLine/></div>
      <div>Si l<Apos/>autre personne est en ligne et q<Apos/>uiel a fermé son panneau de discussion, il s<Apos/>ouvrira automatiquement.</div>
    </>,

    'Game over title': <div>Partie terminée</div>,
    'Game over description': <>
      <div>Vous pouvez démarrer une nouvelle partie avec le·la même joueur·euse.</div>
      <div><TourBlankLine/></div>
      <div>La grille sera de la même dimension.</div>
    </>,
  },
  ES: {
    "Tour Dialog title": "¡Bienvenido a Dots and Boxes!",
    "Tour Dialog P1": <>
      <p>
        Este juego fue descrito por <Anchor href={wikilinks['ES']}><Bold>Édouard Lucas</Bold></Anchor>, un renombrado matemático francés, en su libro <Quot/><Italic>Jeux scientifiques pour servir à l<Apos/>histoire</Italic><Quot/> (Juegos Científicos para Servir a la Historia). Falleció dos años después, el 3 de octubre de 1991, a la edad de 49 años.
      </p>
      <Hr/>
    </>,
    "Tour Dialog P2": <p>
      Realiza el tour guiado para descubrir la interfaz de usuario de esta versión web y las reglas del juego.
    </p>,
    "Tour Dialog button": "Iniciar el tour",

    "Intro 1 title": <div>Presta atención a la flecha <b><RedText>roja</RedText></b>.</div>,
    "Intro 1 description": <>
      <div>En este caso, se refiere al número de jugador·es potenciales que están actualmente en el sitio.</div>
      <div><TourBlankLine/></div>
      <div>Este número te incluye.</div>
    </>,

    "Intro 2 title": <div>Desarrollo futuro...</div>,
    "Intro 2 description": <>
      <div>Puedes solicitar jugar con ell·as.</div>
      <div><TourBlankLine/></div>
      <div>Pero por ahora, necesitas invitar a uno de tus amig·as directamente.</div>
    </>,

    "Intro 3 title": <div>¡Empecemos!</div>,
    "Intro 3 description": <>
      <div>Debe haber dos jugador·es.</div>
      <div>Jugador·a 1 crea el juego.</div>
    </>,

    "Player 1 name title": <div>Nombre de Jugador·a 1</div>,
    "Player 1 name description": <>
      <div>Su nombre está a la izquierda.</div>
      <div>Si creas el juego, tu nombre estará allí.</div>
    </>,

    "Player 1 score title": <div>Puntuación de Jugador·a 1</div>,
    "Player 1 score description": <div>Por cada caja que cierra el Jugador·a 1, se le otorga un punto.</div>,

    "Player 2 name title": <div>Nombre de Jugador·a 2</div>,
    "Player 2 name description": <div>Si te unes a un juego, tu nombre estará a la izquierda.</div>,

    "Player 2 score title": <div>Puntuación de Jugador·a 2</div>,
    "Player 2 score description": <div>Por cada caja que cierra el Jugador·a 2, se le otorga un punto.</div>,

    "Play grid title": <div>Grilla de juego</div>,
    "Play grid description": <>
      <div>La grilla está compuesta de cajas.</div>
      <div><TourBlankLine/></div>
      <div>En este caso, es una grilla de <Bold>2</Bold> x <Bold>2</Bold>.</div>
      <div>Puede tener dimensiones diferentes.</div>
      <div>Por ejemplo: <Bold>6</Bold> x <Bold>8</Bold></div>
    </>,

    "Controls drawer button title": <div>Controles</div>,
    "Controls drawer button description": <div>Este botón abre un panel de control.</div>,

    "Create game title": <div>Crear</div>,
    "Create game description": <div>Este botón abre el formulario de creación de juego.</div>,

    "Create name input title": <div>Tu Nombre</div>,
    "Create name input description": <div>Supongamos que tu nombre es Bertha...</div>,

    "Create game grid title": <div>Ajusta las Dimensiones</div>,
    "Create game grid description": <>
      <div>Usa los controles deslizantes. La grilla se ajustará y te dará una idea visual del resultado.</div>
      <div><TourBlankLine/></div>
      <div>Ten en cuenta que en un dispositivo móvil, un ancho de más de <Bold>6</Bold> obliga al usuario·a a hacer <Quot/>Zoom con pellizco<Quot/> para ver toda la grilla.</div>
    </>,

    "Join game title": <div>Unirse</div>,
    "Join game description": <div>Este botón abre el formulario para unirse a un juego.</div>,

    "Join game input title": <div>Nombre de tu amigo·a</div>,
    "Join game input description": <div>Supongamos que tu nombre es Horacio...</div>,

    "Join game pin title": <div>Número de juego</div>,
    "Join game pin description": <div>Tu amigo·a debe ingresar el número que le proporcionaste.</div>,

    "Leave/Delete game title": <div>Salir / Eliminar</div>,
    "Leave/Delete game description": <>
      <div>Este botón permite salir de un juego.</div>
      <div><TourBlankLine/></div>
      <div>Si solo hay un·a jugador·a, el juego se eliminará.</div>
    </>,
    "More title": <div>Más</div>,
    "More description": <div>Este botón revela más opciones.</div>,

    "Less title": <div>Menos</div>,
    "Less description": <div>Este botón vuelve a las opciones iniciales.</div>,

    "Tour title": <div>Tour guiado</div>,
    "Tour description": <div>¡Sabes lo que hace este botón!</div>,

    "Language title": <div>Idiomas</div>,
    "Language description": <div>Para elegir otra traducción.</div>,

    "Chat title": <div>Botón de chat</div>,
    "Chat description": <>
      <div>Este botón abre el panel de chat.</div>
      <div>Solo está disponible cuando hay otro jugador·a en el juego.</div>
      <div><TourBlankLine/></div>
      <div>Y aunque esté fuera de línea.</div>
    </>,

    "Chat drawer title": <div>Panel de chat</div>,
    "Chat drawer description": <>
      <div>¡Chatea en tiempo real!</div>
      <div><TourBlankLine/></div>
      <div>
        Como en una red social, excepto que la otra persona no recibirá notificaciones.
        Si está fuera de línea, verá sus mensajes en su próxima conexión.
      </div>
    </>,

    "Chat messages title": <div>Mensajes</div>,
    "Chat messages description": <>
      <div>Los mensajes aparecen aquí.</div>
      <div>El nombre de la persona aparece antes del mensaje.</div>
    </>,

    "Chat input title": <div>Entrada de mensaje</div>,
    "Chat input description": <>
      <div>Escribe aquí.</div>
      <div><TourBlankLine/></div>
      <div>Si la otra persona está en línea y ha cerrado su panel de chat, se abrirá automáticamente.</div>
    </>,

    "Game over title": <div>Juego terminado</div>,
    "Game over description": <>
      <div>Puedes iniciar un nuevo juego con el·la misma jugador·a.</div>
      <div><TourBlankLine/></div>
      <div>La grilla será del mismo tamaño.</div>
    </>
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