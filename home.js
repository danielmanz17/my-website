const asciiArt = `
                               ..=:.-=-:. ....:......                                      
                          .-+*****##**#**************+:..                                  
  daniel manz :)      :=++*####***#%##**+###*#####*###*****+-                              
                   :+**#*###*****#########**##*##########*#****.                          
              ++****####*####*###########*####%##%######%%####*+                          
              :*###**###*####**#%###%######*######%############*:.                        
           :+*##################%#######*#############%#########*=:                        
          +#**######%##########*##*#####**#######*#######%%######*+                        
        .+#**#%%###%%#####%####*##*##*****#********#####%%#########+.                      
     . :+##**##%###%%%#####%###*##*##**##****+****######%%##%######+.                      
     .+*%##**#######%%%######******#+#*****+**+****###*%%%#######%#+.                      
     -+##*#*###%##########%####****####*#*#********##*#%%%##%####%%*-                      
    :+*##*#*#####*#########%###################********#%%%%%###%%%#+                      
    -**###****####**##*#**#####***#######*****##*******#%%%%%#%#%%%#+.                    
    -****#****#**####*****#*##*+====+**=:::::::-+++++**#%%%%%##%%%##*=                    
    .=*#*****##*******++=+*#**+-:::..:::....:::::--==++*###%%##%%%%##=.                    
     +*##*+=++++++***+=-::=+++-::...........::::::--==+*##%%%%%%%%##*=.                    
     =+*==-=--===-=++=::...::.................::::--==+#%%%%%%%####+==.                    
     =+*=:............................::::---::::::--+*%%%%%%%####+=*+-.                  
     =**+:.........................::-=======-----:--=*#%%%%%###%*+==+=:                  
     =**#-......................::-=+*++=-:::-----:::-=+*#%%####*===-==:                  
     :+*%*....................:-=+****+========--:::::=**#%##*#*#*++=--.                  
      =*##.:::::::::::::..:::--=++*#*+*#+%##++==-:...::-+**+***+**+++-.                    
      .+*+==+++++====--:...::-=++*+++-..***=---::.....::::-=++=--+=+=-:                    
       .-=::::--=*#***+-....:-=====--::::-::::........:::::-++--:==---.                    
         .=.:-*#*%%%#+=-....::---==-:::..............::::::----:+-::::-.                  
        .=+=:==-:-=----:....::::::---:::.............:::::::-:----:::.                    
          .:..::::::::::...::::::::::::::...........:::::::::::---::                      
            ........::.....:::::::::::...........::::::::::::::-=.                        
            ...............:::-----:............::::::::::::::--:                          
            ..............::::::----:.............::::::::::::--:                          
             ..............::-:::::--:...........:::::::::::::--:                          
              .............::-::-:--+-:..........::::::::::---:::                          
              .........::::--======+-:...........::::::::::---:::                          
               ..........-====+==--::.............:::::::::---:::                          
                ..........:::::.::::::..:.......::::::::::----:::                          
                 ...................::.....:...::::::::::-----:::                          
                 ................::.:..::::::..:::::::::-------::                          
                  .......:::::--======++--:::::::::::----------::.                        
                   .....:====+++*+====-::::::::::::::-----==---:::.                        
                    ....::----::-:--::::::::::::::::-----===---::::.                      
                     ....::----:---:---::::::::::::-----====---:::::.                      
                      ..::::---===----::::::::::::---==+====---::::::.                    
                        :::::---:::........::::----===++===-----::::::.                    
                         ::::::...........::::---==++++====------::::::.                  
                          .:::...........:::--===+++++====--:::--:::::::::--.              
                    .....:**=:::::::::::::-===+++++++===----::::--::::::.:-*#*-            
              .........:+#%%#*=--::::----=++++++++====----::::::--:::::..:+%%%##+=.        
            ..........-*%%%%%%+---=====+==========------::::::::::::::...=%%%%%%%%##=      
          ...........=#%%%%%##%-::---=========--------::::::::::::::::..-#%%%%%%%%%%%#=.  
         ...........+%%%%%%#%%%=::---=====--------:::::::::::::::::::..:#%%%%%%%%%%%%%%#*-.
        ..........:*%%%%%%#%#*=-::---====---------:::::::::::::::.::.::*%%%%%%%%%%%%%%%%%%%
      ...........:*%%%%%%##*-:::::------------------:::::::::::......:*%%%%%%%%%%%%%%%%%%%%
     ...........:#%%%%%##%=::::::::-----------------:::::::::...:...:*%%%%%%%%%%%%%%%%%%%%%
   ............:*%%%%%%#%+::...::::--------::::----:::::::::..:....:*%%%%%%%%%%%%%%%%%%%#%#
  .............%%%%%%%%%#=...::::::-------:::::::::::::::::.::.....*%%%%%%%%%%%%%%%%%%%%#*=
..............%%%%%%%%%%+:::::::::------::::::::::::::::...::.....*%%%%%%%%%%%%%%%%%%%#*+-:
`;

const contentMap = {
    Portfolio: `Brave, 2024 
Embedded AI-driven sound synthesiser, enabling network-bending
---------------------------------------------------------------
Ancestral (r)Evocations, 2024
Archival sonification instrument, live ML feedback soundscape
---------------------------------------------------------------
Iconostasis, 2023
Audio-reactive roses, using JavaScript + PureData 
---------------------------------------------------------------`,
    CV: `This is the CV content.\nMore lines here...`,
    Bio: `.𖥔 ݁ ˖ London, UK

Developer specialising in ML-based audio synthesis, instrument fabrication and human-AI interaction.
Seeking to empower artists in a rapidly developing gen-AI landscape, designing systems that can meaningfully support expression & agency.

GitHub <<<<<<<<<<
LinkedIn <<<<<<<<`,
    Contact: `please feel free to contact me ⊹╰(⌣ʟ⌣)╯⊹
email: danmanzdesign@gmail.com
number: +44 7581 466 806
instagram: @manzzzzzzzzzzd
`
};

const portfolioLinks = {
  'Brave, 2024': 'brave.html',
  'Ancestral (r)Evocations, 2024': 'ancestral.html',
  'Iconostasis, 2023': 'iconostasis.html'
};

const bioLinks = {
  'GitHub': 'https://github.com/danielmanz17',
  'LinkedIn': 'https://www.linkedin.com/in/daniel-manz-a0464b1b2/'
};


document.addEventListener("DOMContentLoaded", () => {
  const asciiTarget = document.getElementById("ascii-art");

  let asciiIndex = 0;
  let asciiDisplay = asciiArt.split('').map(ch => (ch === '\n' ? '\n' : ' '));

  const nonSpaceIndices = [];
  for (let i = 0; i < asciiArt.length; i++) {
    if (asciiArt[i] !== ' ' && asciiArt[i] !== '\n') {
      nonSpaceIndices.push(i);
    }
  }
asciiTarget.textContent = asciiArt;

  const textBox = document.getElementById("text-box-nav");

function renderTextBox(text, linksMap = null, instant = false) {
  function escapeRegExp(string) {
    return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
  }

  if (instant) {
    // Instant render with line breaks and links
    let html = text.replace(/\n/g, '<br>');
    if (linksMap) {
      Object.entries(linksMap).forEach(([txt, href]) => {
        const regex = new RegExp(escapeRegExp(txt), 'g');
        const isExternal = href.startsWith('http');
        const anchor = `<a href="${href}"${isExternal ? ' target="_blank"' : ''}>${txt}</a>`;
        html = html.replace(regex, anchor);
      });
    }
    textBox.innerHTML = html;
    return;
  }

  // Incremental typing effect
  let i = 0;
  const chars = text.split('');
  const display = [];

  function renderStep() {
    if (i < chars.length) {
      display.push(chars[i]);
      textBox.innerHTML = display.join('').replace(/\n/g, '<br>');
      i++;
      setTimeout(renderStep, 0);
    } else if (linksMap) {
      Object.entries(linksMap).forEach(([txt, href]) => {
        const regex = new RegExp(escapeRegExp(txt), 'g');
        const isExternal = href.startsWith('http');
        const anchor = `<a href="${href}"${isExternal ? ' target="_blank"' : ''}>${txt}</a>`;
        textBox.innerHTML = textBox.innerHTML.replace(regex, anchor);
      });
    }
  }

  renderStep();
}

const linksMap = portfolioLinks;
renderTextBox(contentMap['Portfolio'], linksMap, true);

document.querySelectorAll('nav .menu li a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const key = e.target.textContent.trim();
    if (key === 'CV') {
      window.open('./assets/docs/cv.pdf', '_blank');
    } else if (contentMap[key]) {
      const linksMap = key === 'Portfolio' ? portfolioLinks :
                       key === 'Bio' ? bioLinks : null;
      renderTextBox(contentMap[key], linksMap);
    }
  });
});
});
