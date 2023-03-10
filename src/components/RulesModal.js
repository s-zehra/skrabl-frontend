import React from "react";
import "../styles/RulesModal.css";
import { Fade } from "react-awesome-reveal";

const RulesModal = ({ closeModal, lang }) => {
  return (
    <Fade triggerOnce className="rulesModal__wrapper" onClick={closeModal}>
      <div className="rulesModal__content">
        <div className="rulesModal__text">
          {lang === "en" && (
            <>
              <h1>Skrabl Rules</h1>
              <p>
                When playing Skrabl, anywhere from one to two players will enjoy
                the game. The object when playing is to score more points than
                other players. As words are placed on the game board, points are
                collected and each letter that is used in the game will have a
                different point value. The main strategy is to play words that
                have the highest possible score based on the combination of
                letters.
              </p>

              <h3>The Skrabl Board</h3>
              <p>
                A Skrabl board will consist of cells that are located in a large
                square grid. The board offers 15 cells high and 15 cells wide.
                The tiles used on the game will fit in each cell on the board.
              </p>

              <h3>Skrabl Tiles</h3>
              <p>
                There are 100 tiles that are used in the game and 98 of them
                will contain letters and point values. There are 2 blank tiles
                that can be used as wild tiles to take the place of any letter.
                When a blank is played, it will remain in the game as the letter
                it substituted for.
              </p>

              <p>
                Different letters in the game will have various point values and
                this will depend on how rare the letter is and how difficult it
                may be to lay that letter. Blank tiles will have no point
                values.
              </p>

              <h3>Tile Values</h3>
              <p>
                Below are the point values for each letter that is used in a
                Skrabl game.
              </p>

              <p>0 Points - Blank tile.</p>

              <p>1 Point - A, E, I, L, N, O, R, S, T and U.</p>

              <p>2 Points - D and G.</p>

              <p>3 Points - B, C, M and P.</p>

              <p>4 Points - F, H, V, W and Y.</p>

              <p>5 Points - K.</p>

              <p>8 Points - J and X.</p>

              <p>10 Points - Q and Z.</p>

              <h3>Extra Point Values</h3>
              <p>
                When looking at the board, players will see that some squares
                offer multipliers. Should a tile be placed on these squares, the
                value of the tile will be multiplied by 2x or 3x. Some squares
                will also multiply the total value of the word and not just the
                single point value of one tile.
              </p>

              <p>
                Double Letter Scores - The light blue cells in the board are
                isolated and when these are used, they will double the value of
                the tile placed on that square.
              </p>

              <p>
                Triple Letter Score - The dark blue cell in the board will be
                worth triple the amount, so any tile placed here will earn more
                points.
              </p>

              <p>
                Double Word Score - When a cell is light red in colour, it is a
                double word cell and these run diagonally on the board, towards
                the four corners. When a word is placed on these squares, the
                entire value of the word will be doubled.
              </p>

              <p>
                Triple Word Score - The dark red square is where the high points
                can be earned as this will triple the word score. Placing any
                word on these squares will boos points drastically. These are
                found on all four sides of the board and are equidistant from
                the corners.
              </p>

              <p>
                One Single Use - When using the extra point squares on the
                board, they can only be used one time. If a player places a word
                here, it cannot be used as a multiplier by placing another word
                on the same square.
              </p>

              <h3>Starting the Game</h3>

              <p>
                Each player will start their turn with seven tiles from the
                Skrabl bag. There are three options during any turn. The player
                can place a word, they can exchange tiles for new tiles or they
                can choose to pass. In most cases, players will try to place a
                word as the other two options will result in no score.
              </p>

              <p>
                When a player chooses to exchange tiles, they can choose to
                exchange one or all of the tiles they currently hold. After
                tiles are exchanged, the turn is over and players will have to
                wait until their next turn to place a word on the board.
              </p>

              <p>
                Players can choose to pass at any time. They will forfeit that
                turn and hope to be able to play the next time. If six
                consecutive passes are made (three each player), the game will
                end and the one with the highest score will win. If there are no
                tiles left in the Skrabl pouch, then the game will end after two
                consecutive passes.
              </p>

              <h3>The First Word Score</h3>
              <p>
                When the game begins, the first player will place their word on
                the star spin in the centre of the board. The star is a double
                square and will offer a double word score. All players following
                will build their words off of this word, extending the game to
                other squares on the board.
              </p>

              <h3>Replacing Skrabl Tiles</h3>
              <p>
                Once tiles are played on the board, players will be given new
                tiles from the pouch to replace those. Players will always have
                seven tiles during the game.
              </p>

              <h3>The Fifty Point Bonus</h3>
              <p>
                Exciting rewards can come when players use all seven tiles to
                create a word on the board. When this happens, players will
                receive a 50 point bonus, in addition to the value of the word.
                If the game is near the end and players are not holding seven
                tiles, they do not get the bonus for using all of their tiles.
                This is only collected for seven letter words placed.
              </p>

              <h3>The End of a Skrabl Game</h3>
              <p>
                Once all tiles are gone from the bag and a single player has
                placed all of their tiles, the game will end and the player with
                the highest score wins.
              </p>

              <h3>Tallying Skrabl Scores</h3>
              <p>
                When the game ends, each player will count all points that are
                remaining on their tiles that have not been played. This amount
                will be deducted from the final score.
              </p>

              <p>
                An added bonus is awarded to the player that ended the game and
                has no remaining tiles. The tile values of all remaining players
                will be added to the score of the player who is out of tiles to
                produce the final score for the game.
              </p>

              <p>
                The Skrabl player with the highest score after all final scores
                are tallied wins.
              </p>

              <h3>Accepted Skrabl Words</h3>
              <p>
                Any word that is found in a standard English dictionary can be
                used in the game of Skrabl. Only British English spelling is
                accepted. Plurals and verbs in different forms (e.g. past tense)
                are valid. Words which are usually spelled with a capital letter
                (e.g. names) are not valid.
              </p>

              <p>
                There are some words that are not allowed to be played and these
                include suffixes, prefixes and abbreviations. Any word that
                requires the use of a hyphen or apostrophe cannot be played in
                the game. Any word that required the use of a capital letter is
                not allowed.
              </p>

              <p>
                When playing an English version of the game, foreign words are
                not allowed to be placed on the board. However, if the foreign
                word does appear in a standard English dictionary, it is
                allowed. The reason for this is due to the fact that the word is
                spoken enough and is considered part of the English language.
              </p>
            </>
          )}
          {lang === "de" && (
            <>
              <h1>Skrabl-Regeln</h1>
              <p>
                Wenn Sie Skrabl spielen, werden ein bis zwei Spieler Spa?? haben
                das Spiel. Das Ziel beim Spielen ist es, mehr Punkte als andere
                zu erzielen Spieler. Wenn W??rter auf das Spielbrett gelegt
                werden, werden Punkte gesammelt und jeder Buchstabe, der im
                Spiel verwendet wird, hat einen anderen Punkt Wert. Die
                Hauptstrategie besteht darin, W??rter mit den h??chsten Werten zu
                spielen m??gliche Punktzahl basierend auf der
                Buchstabenkombination.
              </p>

              <h3> Das Skrabl-Board </h3>
              <p>
                Eine Skrabl-Karte besteht aus Zellen, die sich in befinden ein
                gro??es quadratisches Gitter. Das Board bietet 15 Zellen hoch und
                15 Zellen breit. Die im Spiel verwendeten Kacheln passen in jede
                Zelle auf dem Brett.
              </p>

              <h3> Skrabl-Kacheln </h3>
              <p>
                Es gibt 100 Pl??ttchen, die im Spiel verwendet werden, und 98
                davon werden es tun Buchstaben und Punktwerte enthalten. Es gibt
                2 leere Kacheln, die k??nnen als wilde Kacheln verwendet werden,
                um den Platz eines Buchstabens einzunehmen. Wenn ein Leerzeichen
                gespielt wird, bleibt es im Spiel als der Buchstabe, den es
                ersetzt zum.
              </p>

              <p>
                Verschiedene Buchstaben im Spiel haben verschiedene Punktwerte
                und Dies h??ngt davon ab, wie selten der Brief ist und wie
                schwierig er sein kann diesen Brief zu legen. Leere Kacheln
                haben keine Punktwerte.
              </p>

              <h3> Kachelwerte </h3>
              <p>
                Unten sind die Punktwerte f??r jeden Buchstaben aufgef??hrt, der
                in a verwendet wird Skrabl Spiel.
              </p>

              <p> 0 Punkte - Leere Kachel. </p>

              <p> 1 Punkt - A, E, I, L, N, O, R, S, T und U. </p>

              <p> 2 Punkte - D und G. </p>

              <p> 3 Punkte - B, C, M und P. </p>

              <p> 4 Punkte - F, H, V, W und Y. </p>

              <p> 5 Punkte - K. </p>

              <p> 8 Punkte - J und X. </p>

              <p> 10 Punkte - Q und Z. </p>

              <h3> Zus??tzliche Punktwerte </h3>
              <p>
                Wenn die Spieler auf das Brett schauen, werden sie sehen, dass
                einige Quadrate bieten Multiplikatoren. Sollte eine Kachel auf
                diese Quadrate gelegt werden, ist der Wert von Das Pl??ttchen
                wird mit 2x oder 3x multipliziert. Einige Quadrate werden auch
                Multiplizieren Sie den Gesamtwert des Wortes und nicht nur den
                einzelnen Punkt Wert einer Kachel.
              </p>

              <p>
                Double Letter Scores - Die hellblauen Zellen auf der Tafel sind
                isoliert und wenn diese verwendet werden, verdoppeln sie den
                Wert von Fliese auf diesem Quadrat platziert.
              </p>

              <p>
                Triple Letter Score - Die dunkelblaue Zelle auf dem Brett ist es
                wert Verdreifache den Betrag, sodass jedes hier platzierte
                Pl??ttchen mehr Punkte bringt.
              </p>

              <p>
                Double Word Score - Wenn eine Zelle hellrot ist, ist es a
                Doppelwortzelle und diese verlaufen diagonal auf der Tafel in
                Richtung vier Ecken. Wenn ein Wort auf diese Quadrate gesetzt
                wird, das Ganze Der Wert des Wortes wird verdoppelt.
              </p>

              <p>
                Triple Word Score - Auf dem dunkelroten Quadrat k??nnen die
                H??hepunkte angezeigt werden verdient werden, da dies die
                Wortpunktzahl verdreifacht. Ein Wort aufsetzen Diese Quadrate
                werden die Punkte drastisch erh??hen. Diese sind auf allen zu
                finden vier Seiten der Platte und sind von den Ecken gleich weit
                entfernt.
              </p>

              <p>
                Einmaliger Gebrauch - Wenn Sie die zus??tzlichen Punktquadrate
                auf dem Brett verwenden, Sie k??nnen nur einmal verwendet werden.
                Wenn ein Spieler hier ein Wort platziert, ist es kann nicht als
                Multiplikator verwendet werden, indem ein anderes Wort darauf
                gesetzt wird Quadrat.
              </p>

              <h3> Spiel starten </h3>

              <p>
                Jeder Spieler beginnt seinen Zug mit sieben Pl??ttchen aus dem
                Skrabl Tasche. In jeder Runde gibt es drei M??glichkeiten. Der
                Spieler kann ein Wort platzieren, sie k??nnen Kacheln gegen neue
                Kacheln austauschen oder sie k??nnen entscheide dich zu bestehen.
                In den meisten F??llen versuchen die Spieler, ein Wort als zu
                platzieren Die beiden anderen Optionen f??hren zu keiner
                Punktzahl.
              </p>

              <p>
                Wenn ein Spieler Steine ??????austauschen m??chte, kann er diese
                austauschen eine oder alle Kacheln, die sie derzeit halten. Nach
                Fliesen sind ausgetauscht, der Zug ist vorbei und die Spieler
                m??ssen warten bis ihre n??chste Runde, um ein Wort an die Tafel
                zu setzen.
              </p>

              <p>
                Spieler k??nnen jederzeit passen. Sie werden diese Runde
                verlieren und hoffe, das n??chste Mal spielen zu k??nnen. Wenn
                sechs aufeinanderfolgende P??sse gemacht werden (drei pro
                Spieler), endet das Spiel und derjenige mit der h??chsten
                Punktzahl wird gewinnen. Wenn im Skrabl-Beutel keine Kacheln
                mehr vorhanden sind, endet das Spiel nach zwei aufeinander
                folgenden Durchg??ngen.
              </p>

              <h3> Die erste Wortpartitur </h3>
              <p>
                Wenn das Spiel beginnt, setzt der erste Spieler sein Wort auf
                Der Stern dreht sich in der Mitte des Bretts. Der Stern ist ein
                Doppel Quadrat und bietet eine doppelte Wortzahl. Alle Spieler
                folgen werden ihre Worte aus diesem Wort aufbauen und das Spiel
                auf erweitern andere Quadrate auf dem Brett.
              </p>

              <h3> Ersetzen von Skrabl-Kacheln </h3>
              <p>
                Sobald die Steine ??????auf dem Brett gespielt wurden, erhalten die
                Spieler neue Fliesen aus dem Beutel, um diese zu ersetzen.
                Spieler werden immer haben sieben Pl??ttchen w??hrend des Spiels.
              </p>

              <h3> Der F??nfzig-Punkte-Bonus </h3>
              <p>
                Spannende Belohnungen k??nnen kommen, wenn Spieler alle sieben
                Kacheln verwenden Erstelle ein Wort an der Tafel. Wenn dies
                passiert, werden die Spieler Sie erhalten zus??tzlich zum Wert
                des Wortes einen Bonus von 50 Punkten. Wenn das Spiel zu Ende
                ist und die Spieler keine sieben halten Kacheln erhalten sie
                nicht den Bonus f??r die Verwendung aller Kacheln. Dies wird nur
                f??r W??rter mit sieben Buchstaben gesammelt.
              </p>

              <h3> Das Ende eines Skrabl-Spiels </h3>
              <p>
                Sobald alle Steine ??????aus der Tasche verschwunden sind und ein
                einzelner Spieler hat Wenn alle ihre Kacheln platziert werden,
                endet das Spiel und der Spieler mit Die h??chste Punktzahl
                gewinnt.
              </p>

              <h3> Skrabl-Ergebnisse z??hlen </h3>
              <p>
                Wenn das Spiel endet, z??hlt jeder Spieler alle Punkte, die es
                gibt auf ihren Pl??ttchen bleiben, die nicht gespielt wurden.
                Diese Menge wird vom Endergebnis abgezogen.
              </p>

              <p>
                Ein zus??tzlicher Bonus wird an den Spieler vergeben, der das
                Spiel beendet hat und hat keine verbleibenden Kacheln. Die
                Kachelwerte aller verbleibenden Spieler wird zur Punktzahl des
                Spielers hinzugef??gt, der keine Kacheln mehr hat Produziere das
                Endergebnis f??r das Spiel.
              </p>

              <p>
                Der Skrabl-Spieler mit der h??chsten Punktzahl nach allen
                Endergebnissen sind gew??hlte Siege.
              </p>

              <h3> Akzeptierte Skrabl-W??rter </h3>
              <p>
                Jedes Wort, das in einem englischen Standardw??rterbuch gefunden
                wird, kann sein im Spiel von Skrabl verwendet. Es wird nur die
                britische Rechtschreibung akzeptiert. Pluralformen und Verben in
                verschiedenen Formen (z. B. Vergangenheitsform) sind g??ltig.
                W??rter, die normalerweise mit einem Gro??buchstaben geschrieben
                werden (z. B. Namen), sind ung??ltig.
              </p>

              <p>
                Es gibt einige W??rter, die nicht gespielt werden d??rfen und
                diese F??gen Sie Suffixe, Pr??fixe und Abk??rzungen hinzu. Jedes
                Wort das erfordert die Verwendung eines Bindestrichs oder
                Apostrophs kann nicht gespielt werden das Spiel. Jedes Wort, f??r
                das ein Gro??buchstabe erforderlich ist, lautet nicht erlaubt.
              </p>

              <p>
                Wenn Sie eine englische Version des Spiels spielen, sind
                Fremdw??rter darf nicht auf die Tafel gelegt werden. Wenn jedoch
                der Ausl??nder Das Wort erscheint in einem englischen
                Standardw??rterbuch erlaubt. Der Grund daf??r ist die Tatsache,
                dass das Wort ist genug gesprochen und gilt als Teil der
                englischen Sprache.
              </p>
            </>
          )}
          {lang === "tr" && (
            <>
              <h1> Skrabl Kurallar?? </h1>
              <p>
                Skrabl oynarken, bir ila iki oyuncu her yerde e??lenecek oyun.
                Oynarken ama?? daha fazla puan elde etmektir di??er oyuncular.
                Kelimeler oyun tahtas??na yerle??tirildik??e, puanlar toplan??r ve
                oyunda kullan??lan her harf bir farkl?? nokta de??eri. Ana strateji
                ??u kelimeleri oynamakt??r: kombinasyonuna g??re m??mk??n olan en
                y??ksek puana sahip olmak harfler.
              </p>

              <h3> Skrabl Kurulu </h3>
              <p>
                Skrabl tahtas??, b??y??k bir alanda bulunan h??crelerden
                olu??acakt??r. kare ??zgara. Kart, 15 h??cre y??ksekli??inde ve 15
                h??cre geni??li??inde sunuyor. Oyunda kullan??lan karolar tahtadaki
                her h??creye s????acak.
              </p>

              <h3> Skrabl Karolar?? </h3>
              <p>
                Oyunda kullan??lan 100 karo ve 98 tanesi var harfler ve nokta
                de??erleri i??erecektir. 2 bo?? d????eme var herhangi bir mektubun
                yerini almak i??in vah??i fayans olarak kullan??labilir. Bir bo??luk
                oynand??????nda, oyunda harf olarak kal??r onun yerine.
              </p>

              <p>
                Oyundaki farkl?? harfler farkl?? puan de??erlerine sahip olacak ve
                bu mektubun ne kadar nadir oldu??una ve ne kadar zor oldu??una
                ba??l?? olacakt??r. bu mektubu koymak olabilir. Bo?? d????emelerin bir
                anlam?? olmayacak de??erler.
              </p>

              <h3> D????eme De??erleri </h3>
              <p>
                A??a????da, her harf i??in kullan??lan her harf i??in nokta de??erleri
                verilmi??tir. Skrabl oyunu.
              </p>

              <p> 0 Puan - Bo?? kutucuk. </p>

              <p> 1 Nokta - A, E, I, L, N, O, R, S, T ve U. </p>

              <p> 2 Puan - D ve G. </p>

              <p> 3 Puan - B, C, M ve P. </p>

              <p> 4 Puan - F, H, V, W ve Y </p>

              <p> 5 Puan - K. </p>

              <p> 8 Puan - J ve X. </p>

              <p> 10 Puan - Q ve Z. </p>

              <h3> Ekstra Nokta De??erleri </h3>
              <p>
                Tahtaya bakarken, oyuncular baz?? kareler g??recek teklif
                ??arpanlar??. Bu karelere bir kiremit yerle??tirilirse, d????emenin
                de??eri 2x veya 3x ile ??arp??l??r. Baz?? kareler sadece kelimenin
                de??il, kelimenin toplam de??erini de bir d????emenin tek nokta
                de??eri.
              </p>

              <p>
                ??ift Mektup Skorlar?? - Karttaki a????k mavi h??creler izole
                edildi??inde ve bunlar kullan??ld??????nda, kiremit o kareye
                yerle??tirilir.
              </p>

              <p>
                ????l?? Mektup Puan?? - Karttaki koyu mavi h??cre ???? kat de??erinde,
                bu y??zden buraya yerle??tirilen karolar daha fazla kazanacak
                puan.
              </p>

              <p>
                ??ift Kelime Puan?? - Bir h??cre a????k k??rm??z?? renkte oldu??unda,
                ??ift ??????kelime h??cresi ve bunlar tahtada, d??rt k????e. Bu karelere
                bir kelime yerle??tirildi??inde, kelimenin t??m de??eri iki kat??na
                ????kar.
              </p>

              <p>
                ????l?? Kelime Puan?? - Koyu k??rm??z?? kare, y??ksek noktalar??n Bu,
                kelime skorunu ???? kat??na ????karaca???? i??in kazan??labilir. Herhangi
                bir yerle??tirme bu karelerdeki kelime b??y??k ??l????de puan
                kazanacak. Bunlar tahta d??rt taraf??nda bulunur ve e??it uzakl??kta
                k????eleri.
              </p>

              <p>
                Tek Kullan??ml??k - Ekrandaki ekstra nokta karelerini kullan??rken
                tahta, sadece bir kez kullan??labilir. Bir oyuncu bir kelime
                yerle??tirirse burada, ba??ka bir kelime koyarak ??arpan olarak
                kullan??lamaz ayn?? meydanda.
              </p>

              <h3> Oyuna Ba??lama </h3>

              <p>
                Her oyuncu s??rayla Skrabl ??antas??. Herhangi bir d??n???? s??ras??nda
                ???? se??enek vard??r. Oyuncu bir kelime yerle??tirebilir, yeni
                fayanslar i??in fayans de??i??imi yapabilir veya ge??mek
                se??ebilirsiniz. ??o??u durumda, oyuncular bir di??er iki se??enek
                olarak hi??bir puan ile sonu??lanmayacakt??r.
              </p>

              <p>
                Bir oyuncu fayans de??i??tirmeyi se??ti??inde, ??u anda sahip
                olduklar?? karolardan birini veya t??m??n?? de??i??tirin. Sonra fayans
                de??i??tirilir, s??ra bitti ve oyuncular tahtaya bir kelime
                yerle??tirmek i??in bir sonraki s??raya kadar bekleyin.
              </p>

              <p>
                Oyuncular istedikleri zaman ge??meyi se??ebilirler. Bunu
                kaybedecekler bir dahaki sefere oynayabilmeyi umuyoruz. E??er
                alt?? ard??????k paslar yap??l??r (her oyuncu ????), oyun ve en y??ksek
                puana sahip olan kazan??r. E??er yoksa Skrabl torbas??nda kalan
                karolar, oyun iki sonra bitecek ard??????k ge??i??ler.
              </p>

              <h3> ??lk Kelime Puan?? </h3>
              <p>
                Oyun ba??lad??????nda, ilk oyuncu s??zlerini Tahtan??n ortas??ndaki
                y??ld??z d??n??????. Y??ld??z bir ??ift kare ve ??ift kelime puan??
                sunacak. Takip eden t??m oyuncular kelimelerini bu kelimeden
                olu??turacak, oyunu tahtadaki di??er kareler.
              </p>

              <h3> Skrabl Karolar?? De??i??tirme </h3>
              <p>
                Fayans tahtada oynand??ktan sonra, oyunculara yeni verilir
                Bunlar?? de??i??tirmek i??in kese fayans. Oyuncular her zaman oyun
                s??ras??nda yedi fayans.
              </p>

              <h3> Elli Puan Bonusu </h3>
              <p>
                Oyuncular yedi kutucu??un hepsini kullanmak i??in heyecan verici
                ??d??ller gelebilir. tahtada bir kelime olu??turmak. Bu oldu??unda,
                oyuncular kelimenin de??erine ek olarak 50 puanl??k bonus
                kazan??rs??n??z. Oyun sona yakla??t??ysa ve oyuncular yedi tutmuyorsa
                fayans, t??m karolar??n?? kullanma bonusu alamazlar. Bu sadece
                yerle??tirilen yedi harfli kelime i??in toplan??r.
              </p>

              <h3> Skrabl Oyunun Sonu </h3>
              <p>
                T??m fayanslar ??antadan ????kt??????nda ve tek bir oyuncu t??m
                ta??lar??n?? yerle??tirdiler, oyun bitecek ve oyuncu en y??ksek puan
                kazan??r.
              </p>

              <h3> Skrabl Skorlar??n?? Kar????lama </h3>
              <p>
                Oyun sona erdi??inde, her oyuncu t??m puanlar?? sayar. oynanmam????
                fayanslar??nda kal??yor. Bu miktar final skorundan d??????lecektir.
              </p>

              <p>
                Oyunu bitiren oyuncuya ek bir bonus verilir ve kalan d????emeleri
                yok. Kalan t??m oyuncular??n d????eme de??erleri i??in fayans d??????
                olan oyuncunun skoruna eklenecek oyunun son skorunu ??retir.
              </p>

              <p>
                T??m final skorlar??ndan sonra en y??ksek puan?? alan Skrabl
                oyuncusu kazan??lan kazan??r.
              </p>

              <h3> Kabul Edilen Skrabl Kelimeleri </h3>
              <p>
                Standart ??ngilizce s??zl??kte bulunan herhangi bir kelime Skrabl
                oyununda kullan??l??r. Sadece ??ngiliz ??ngilizcesi yaz??m kabul
                edilir. ??o??ullar ve farkl?? formlardaki fiiller (mesela ge??mi??
                zaman) ge??erlidir. Genellikle b??y??k harfle yaz??lan kelimeler
                (mesela adlar) ge??erli de??ildir.
              </p>

              <p>
                ??al??nmas??na izin verilmeyen baz?? kelimeler var ve bunlar
                sonekleri, ??nekleri ve k??saltmalar?? i??erir. Herhangi bir kelime
                tire veya kesme i??areti kullan??lmas??n?? gerektirmez oyun. B??y??k
                harf kullan??m??n?? gerektiren herhangi bir kelime izin verilmedi.
              </p>

              <p>
                Oyunun ??ngilizce versiyonunu oynarken yabanc?? kelimeler tahtaya
                yerle??tirilmesine izin verilmez. Ancak, yabanc?? kelime standart
                ??ngilizce s??zl??kte g??r??n??yor, izin verdi. Bunun nedeni,
                kelimenin yeterince konu??ulur ve ??ngilizce dilinin bir par??as??
                olarak kabul edilir.
              </p>
            </>
          )}
          {lang === "fr" && (
            <>
              <h1> R??gles Skrabl </h1>
              <p>
                Lorsque vous jouez ?? Skrabl, de un ?? deux joueurs appr??cieront
                le jeu. Le but en jouant est de marquer plus de points que
                d'autres joueurs. Lorsque les mots sont plac??s sur le plateau de
                jeu, les points sont collect??es et chaque lettre utilis??e dans
                le jeu aura un valeur de point diff??rente. La strat??gie
                principale est de jouer des mots qui avoir le score le plus
                ??lev?? possible en fonction de la combinaison de des lettres.
              </p>

              <h3> Le tableau Skrabl </h3>
              <p>
                Un tableau Skrabl sera compos?? de cellules situ??es dans un grand
                grille carr??e. La carte offre 15 cellules de haut et 15 cellules
                de large. Les tuiles utilis??es dans le jeu rentreront dans
                chaque cellule du plateau.
              </p>

              <h3> Tuiles Skrabl </h3>
              <p>
                Il y a 100 tuiles qui sont utilis??es dans le jeu et 98 d'entre
                elles contiendra des lettres et des valeurs en points. Il y a 2
                tuiles vierges qui peuvent ??tre utilis??es comme tuiles sauvages
                pour remplacer n'importe quelle lettre. Lorsqu'un blanc est
                jou??, il restera dans le jeu en tant que lettre il a remplac??.
              </p>

              <p>
                Diff??rentes lettres du jeu auront diff??rentes valeurs de points
                et cela d??pendra de la raret?? de la lettre et de sa difficult??
                peut ??tre de d??poser cette lettre. Les carreaux vierges n'auront
                aucun int??r??t valeurs.
              </p>

              <h3> Valeurs de tuile </h3>
              <p>
                Vous trouverez ci-dessous les valeurs en points pour chaque
                lettre utilis??e dans un Jeu de Skrabl.
              </p>

              <p> 0 point - tuile vierge. </p>

              <p> 1 point - A, E, I, L, N, O, R, S, T et U. </p>

              <p> 2 points - D et G. </p>

              <p> 3 points - B, C, M et P. </p>

              <p> 4 points - F, H, V, W et Y. </p>

              <p> 5 points - K. </p>

              <p> 8 points - J et X. </p>

              <p> 10 points - Q et Z. </p>
              <p>
                En regardant le tableau, les joueurs verront que certaines cases
                offrir des multiplicateurs. Si une tuile est plac??e sur ces
                cases, le la valeur de la tuile sera multipli??e par 2x ou 3x.
                Quelques carr??s multipliera ??galement la valeur totale du mot et
                pas seulement le valeur de point unique d'une tuile.
              </p>

              <p>
                Scores en double lettre - Les cellules bleu clair du tableau
                sont isol??s et lorsqu'ils sont utilis??s, ils doubleront la
                valeur de la tuile plac??e sur cette case.
              </p>

              <p>
                Score triple lettre - La cellule bleu fonc?? du tableau sera vaut
                le triple du montant, donc toute tuile plac??e ici gagnera plus
                points.
              </p>

              <p>
                Score de mot double - Lorsqu'une cellule est de couleur rouge
                clair, c'est un double cellule de mot et ceux-ci se dirigent en
                diagonale sur le tableau, vers les quatre coins. Lorsqu'un mot
                est plac?? sur ces carr??s, le la valeur enti??re du mot sera
                doubl??e.
              </p>

              <p>
                Score triple mot - Le carr?? rouge fonc?? est l'endroit o?? les
                points forts peut ??tre gagn?? car cela triplera le score de mots.
                Placer tout mot sur ces carr??s fera huer les points de mani??re
                drastique. Ceux-ci sont trouv??s sur les quatre c??t??s de la
                planche et sont ??quidistants de les coins.
              </p>

              <p>
                Une seule utilisation - Lors de l'utilisation des carr??s de
                points suppl??mentaires sur le conseil d'administration, ils ne
                peuvent ??tre utilis??s qu'une seule fois. Si un joueur place un
                mot ici, il ne peut pas ??tre utilis?? comme multiplicateur en
                pla??ant un autre mot sur le m??me carr??.
              </p>

              <h3> D??marrer le jeu </h3>

              <p>
                Chaque joueur commencera son tour avec sept tuiles du Sac
                Skrabl. Il y a trois options ?? chaque tour. Le joueur peuvent
                placer un mot, ils peuvent ??changer des tuiles contre de
                nouvelles tuiles ou ils peut choisir de passer. Dans la plupart
                des cas, les joueurs essaieront de placer un mot car les deux
                autres options n'entra??neront aucun score.
              </p>

              <p>
                Lorsqu'un joueur choisit d'??changer des tuiles, il peut choisir
                de ??changer une ou toutes les tuiles qu'ils d??tiennent
                actuellement. Apr??s les tuiles sont ??chang??es, le tour est
                termin?? et les joueurs devront attendez leur prochain tour pour
                placer un mot au tableau.
              </p>

              <p>
                Les joueurs peuvent choisir de passer ?? tout moment. Ils
                perdront cela tourner et esp??rer pouvoir jouer la prochaine
                fois. Si six des passes cons??cutives sont effectu??es (trois par
                joueur), le jeu fin et celui avec le score le plus ??lev??
                gagnera. S'il n'y a pas tuiles laiss??es dans la pochette Skrabl,
                puis le jeu se terminera apr??s deux passes cons??cutives.
              </p>

              <h3> Le score du premier mot </h3>
              <p>
                Lorsque le jeu commence, le premier joueur placera sa parole sur
                l'??toile tourne au centre du plateau. L'??toile est un double
                carr?? et offrira un double score de mots. Tous les joueurs
                suivant construiront leurs mots sur ce mot, ??tendant le jeu ??
                autres carr??s sur le plateau.
              </p>

              <h3> Remplacement des tuiles Skrabl </h3>
              <p>
                Une fois les tuiles jou??es sur le plateau, les joueurs recevront
                de nouveaux tuiles de la pochette pour les remplacer. Les
                joueurs auront toujours sept tuiles pendant le jeu.
              </p>

              <h3> Le bonus de cinquante points </h3>
              <p>
                Des r??compenses int??ressantes peuvent venir lorsque les joueurs
                utilisent les sept tuiles pour cr??ez un mot au tableau. Lorsque
                cela se produit, les joueurs recevez un bonus de 50 points, en
                plus de la valeur du mot. Si le jeu approche de la fin et que
                les joueurs n'en ont pas sept tuiles, ils n'obtiennent pas le
                bonus pour l'utilisation de toutes leurs tuiles. Ceci n'est
                collect?? que pour les mots de sept lettres plac??s.
              </p>

              <h3> La fin d'un jeu Skrabl </h3>
              <p>
                Une fois que toutes les tuiles sont parties du sac et qu'un seul
                joueur a plac?? toutes leurs tuiles, le jeu se terminera et le
                joueur avec le score le plus ??lev?? l'emporte.
              </p>

              <h3> Comptage des scores de Skrabl </h3>
              <p>
                ?? la fin du jeu, chaque joueur comptera tous les points restant
                sur leurs tuiles qui n'ont pas ??t?? jou??es. Cette somme sera
                d??duit du score final.
              </p>

              <p>
                Un bonus suppl??mentaire est attribu?? au joueur qui a termin?? le
                jeu et n'a pas de tuiles restantes. Les valeurs des tuiles de
                tous les joueurs restants sera ajout?? au score du joueur qui n'a
                plus de tuiles pour produire le score final du jeu.
              </p>

              <p>
                Le joueur Skrabl avec le score le plus ??lev?? apr??s tous les
                scores finaux sont compt??s des victoires.
              </p>

              <h3> Mots Skrabl accept??s </h3>
              <p>
                Tout mot qui se trouve dans un dictionnaire anglais standard
                peut ??tre utilis?? dans le jeu de Skrabl. Seule l'orthographe
                anglaise britannique est accept??e. Les pluriels et les verbes
                sous diff??rentes formes (par exemple le pass??) sont valides. Les
                mots qui sont g??n??ralement ??crits avec une majuscule (par
                exemple les noms) ne sont pas valides.
              </p>

              <p>
                Il y a des mots qui ne peuvent pas ??tre jou??s et ceux-ci inclure
                des suffixes, des pr??fixes et des abr??viations. Tout mot qui
                n??cessite l'utilisation d'un trait d'union ou une apostrophe ne
                peut pas ??tre jou?? dans le jeu. Tout mot n??cessitant
                l'utilisation d'une majuscule est interdit.
              </p>

              <p>
                Lorsque vous jouez ?? une version anglaise du jeu, les mots
                ??trangers sont ne peut pas ??tre plac?? sur le plateau. Cependant,
                si l'??tranger mot appara??t dans un dictionnaire anglais
                standard, c'est permis. La raison en est que le mot est assez
                parl?? et est consid??r?? comme faisant partie de la langue
                anglaise.
              </p>
            </>
          )}
        </div>
        <div className="rulesModal__buttons">
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    </Fade>
  );
};

export default RulesModal;
