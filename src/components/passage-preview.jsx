
var React = require('react');

module.exports = React.createClass({

  generateCSSText: function(cssType, tag) {
    var html = tag + '{';
    for (var key in cssType) {
      if (cssType.hasOwnProperty(key)) {
        var keyFragment = key.split(/(?=[A-Z])/);
        keyFragment.forEach(function(goingToLower, key){
          keyFragment[key] = goingToLower.toLowerCase();
        });
        var cssProperty = keyFragment.join('-');
        html += '<br>' + cssProperty + ': ' + cssType[key] + ';';
      }
    }
    html += '<br>' + '}';
    return html
  },

  render: function() {
    var styleP = {
        marginTop: this.props.pMarginTop,
        marginBottom: this.props.pMarginBottom,
        paddingTop: this.props.pPaddingTop,
        paddingBottom: this.props.pPaddingBottom,
        letterSpacing:this.props.pLetterSpacing,
      },

      styleH1 = {
        marginTop: this.props.h1MarginTop,
        marginBottom: this.props.h1MarginBottom,
        paddingTop: this.props.h1PaddingTop,
        paddingBottom: this.props.h1PaddingBottom,
        letterSpacing: this.props.h1LetterSpacing,
        fontSize: this.props.h1FontSize
      },

      styleH2 = {
        marginTop: this.props.h2MarginTop,
        marginBottom: this.props.h2MarginBottom,
        paddingTop: this.props.h2PaddingTop,
        paddingBottom: this.props.h2PaddingBottom,
        letterSpacing: this.props.h2LetterSpacing,
        fontSize: this.props.h2FontSize
      },

      styleArticle = {
        marginTop: this.props.articleMarginTop,
        marginBottom: this.props.articleMarginBottom,
        paddingTop: this.props.articlePaddingTop,
        paddingBottom: this.props.articlePaddingBottom,
        fontSize: this.props.articleFontSize,
      };

      var referenceLine = this.props.referenceLine;
      var referenceLinePosition = this.props.referenceLinePosition;

      var classStrings = "novel-content"
      if (referenceLine) {
        classStrings += " reference-line";
      }

      var baseStyle = {
        fontSize: this.props.baseFontSize + 'px',
        lineHeight: this.props.lineHeight + 'em'};
      if (referenceLine) {
        baseStyle['backgroundSize'] = "100% " + this.props.lineHeight + "em";
        baseStyle['backgroundPosition'] = "left top " + referenceLinePosition + "px";
      }

      var cssRawSytle = {fontSize: '13px !important',
                          lineHeight: 'rem',
                          display: 'inline-block',
                          float: 'right',
                        };
      var h1CSSText = this.generateCSSText(styleH1, 'h1');
      var h2CSSText = this.generateCSSText(styleH2, 'h2');
      var articleCSSText = this.generateCSSText(styleArticle, 'article');
      var paragraphCSSText = this.generateCSSText(styleP, 'p');
      // <pre style={cssRawSytle} dangerouslySetInnerHTML={{__html: h1CSSText}} />
      // <pre style={cssRawSytle} dangerouslySetInnerHTML={{__html: h2CSSText}} />
      // <pre style={cssRawSytle} dangerouslySetInnerHTML={{__html: articleCSSText}} />
      // <pre style={cssRawSytle} dangerouslySetInnerHTML={{__html: paragraphCSSText}} />

    return (
      <div className={classStrings} style={baseStyle}>
        <header>
          <h1 style={styleH1}>吶喊</h1>
        </header>
        <article style={styleArticle}>
          <section>
            <h2 style={styleH2}>《序》</h2>
            <p style={styleP}>
              我在年青時候也曾經做過許多夢，後來大半忘卻了，但自己也並不以為可惜。 所謂回憶者，雖說可以使人歡欣，有時也不免使人寂寞，使精神的絲縷還牽著己逝的寂寞的時光，又有什麼意味呢，而我偏苦於不能全忘卻，這不能全忘的一部分，到現在便成了《吶喊》的來由。 我有四年多，曾經​​常常，——幾乎是每天，出入於質鋪和藥店裡，年紀可是忘卻了，總之是藥店的櫃檯正和我一樣高，質舖的是比我高一倍，我從一倍高的櫃檯外送上衣服或首飾去，在侮蔑裡接了錢，再到一樣高的櫃檯上給我久病的父親去買藥。 回家之後，又須忙別的事了，因為開方的醫生是最有名的，以此所用的藥引也奇特：冬天的蘆根 ，經霜三年的甘蔗 ，蟋蟀要原對的，結子的平地木 ，……多不是容易辦到的東西。 然而我的父親終於日重一日的亡故了。
            </p>
            <p style={styleP}>
              有誰從小康人家而墜入困頓的麼，我以為在這途路中，大概可以看見世人的真面目；我要到N進K學堂去了，彷彿是想走異路，逃異地，去尋求別樣的人們。 我的母親沒有法，辦了八元的川資，說是由我的自便；然而伊哭了，這正是情理中的事，因為那時讀書應試是正路，所謂學洋務，社會上便以為是一種走投無路的人，只得將靈魂賣給鬼子，要加倍的奚落而且排斥的，而況伊又看不見自己的兒子了。 然而我也顧不得這些事，終於到N去進了K學堂了，在這學堂裡，我才知道世上還有所謂格致，算學，地理，歷史，繪圖和體操。 生理學並不教，但我們卻看到些木版的《全體新論》和《化學衛生論》之類了。 我還記得先前的醫生的議論和方藥，和現在所知道的比較起來，便漸漸的悟得中醫不過是一種有意的或無意的騙子，同時又很起了對於被騙的病人和他的家族的同情；而且從譯出的歷史上，又知道了日本維新是大半發端於西方醫學的事實。
            </p>
            <p style={styleP}>
              因為這些幼稚的知識，後來便使我的學籍列在日本一個鄉間的醫學專門學校裡了。 我的夢很美滿，預備卒業回來，救治像我父親似的被誤的病人的疾苦，戰爭時候便去當軍醫，一面又促進了國人對於維新的信仰。 我已不知道教授微生物學的方法，現在又有了怎樣的進步了，總之那時是用了電影，來顯示微生物的形狀的，因此有時講義的一段落已完，而時間還沒有到，教師便映些風景或時事的畫片給學生看，以用去這多餘的光陰。 其時正當日俄戰爭的時候，關於戰事的畫片自然也就比較的多了，我在這一個講堂中，便須常常隨喜我那同學們的拍手和喝采。 有一回，我竟在畫片上忽然會見我久違的許多中國人了，一個綁在中間，許多站在左右，一樣是強壯的體格，而顯出麻木的神情。 據解說，則綁著的是替俄國做了軍事上的偵探，正要被日軍砍下頭顱來示眾，而圍著的便是來賞鑑這示眾的盛舉的人們。
            </p>
            <p style={styleP}>
              ... ...
            </p>
          </section>
        </article>

        <article style={styleArticle}>
          <section>
            <h2 style={styleH2}>一件小事</h2>
            <p style={styleP}>
              我從鄉下跑到京城裡，一轉眼已經六年了。 其間耳聞目睹的所謂國家大事，算起來也很不少，但在我心裡，都不留什麼痕跡。 倘要我尋出這些事的影響來說，便只是增長了我的壞脾氣，──老實說，便是教我一天比一天的看不起人。
            </p>
            <p style={styleP}>
              但有一件小事，卻於我有意義，將我從壞脾氣裡拖開，使我至今忘記不得。
            </p>
            <p style={styleP}>
              這是民國六年的冬天，大北風刮得正猛，我因為生計關係，不得不一早在路上走。 一路幾乎遇不見人，好容易才僱定了一輛人力車，教他拉到Ｓ門去。 不一會，北風小了，路上浮塵早已刮淨，剩下一條潔白的大道來，車夫也跑得更快。 剛近Ｓ門，忽而車把上帶著一個人，慢慢地倒了。
            </p>
            <p style={styleP}>
              ... ...
            </p>
          </section>
        </article>
      </div>
    )
  }
});
