(function () {
  $(function () {
    var $document,
      death,
      enterDuelMode,
      enterOutro,
      noHonor,
      reset,
      resetMessages,
      restart,
      showDuelInfo,
      startButtonOS,
      win;
    $document = $(document);
    this.$body = $document.find("body");

    // opening screen -----------------------------
    this.$openingScreen = $document.find(".js-opening");
    this.$playScreen = $document.find(".js-play");
    this.$startButtonOS = this.$openingScreen.find(".js-start");
    this.$messageOS = this.$openingScreen.find(".js-message");
    startButtonOS = () => {
      this.$startButtonOS.addClass("is-hidden");
      this.$messageOS.removeClass("is-hidden");
      return this.$openingScreen.addClass("has-message");
    };
    this.$startButtonOS.on("click", () => {
      return startButtonOS();
    });
    this.$continueButtonOS = this.$openingScreen.find(".js-continue");
    this.$continueButtonOS.on("click", () => {
      this.$openingScreen.addClass("is-hidden");
      this.$playScreen.removeClass("is-hidden");
      this.$openingScreen.removeClass("has-message");
      return showDuelInfo();
    });

    // play screen -----------------------------
    this.$messagePS = this.$playScreen.find(".js-message");
    this.$duelButton = $document.find(".js-duel");
    this.$drawButton = $document.find(".js-draw");
    this.$sheriff = $document.find(".js-sheriff");
    this.$opponent = $document.find(".js-opponent");
    this.$resultPS = $document.find(".js-result");
    this.result;
    this.$timer;
    this.dueling = false;
    this.level = 1;
    this.gameOver = false;
    this.noHonor = 1;
    this.totalTime = 0;
    restart = () => {
      // completely restarts game
      this.level = 1;
      this.noHonor = 0;
      this.dueling = false;
      this.gameOver = false;
      this.totalTime = 0;
      resetMessages();
      this.$outroScreen.addClass("is-hidden");
      this.$playScreen.addClass("is-hidden");
      this.$openingScreen.removeClass("is-hidden");
      this.$startButtonOS.removeClass("is-hidden");
      this.$messageOS.addClass("is-hidden");
      this.$body.removeClass("game-over");
      this.$body.removeClass("game-end");
      this.$sheriff.removeClass("is-dead");
      return this.$sheriff.removeClass("is-gone");
    };
    death = () => {
      this.totalTime = 0;
      this.$opponent.addClass("is-shooting");
      this.$sheriff.addClass("is-dead");
      return setTimeout(() => {
        this.$sheriff.addClass("is-gone");
        this.$opponent.removeClass("is-shooting");
        this.$resultPS.html("Game Over");
        this.$duelButton.removeClass("is-hidden");
        this.level = 1;
        this.gameOver = true;
        this.$body.addClass("game-over");
      }, 200);
    };
    win = () => {
      this.totalTime = this.totalTime + this.result;
      this.$sheriff.addClass("is-shooting");
      this.$opponent.addClass("is-dead");
      this.$resultPS.html(
        "Justice served in " + this.result.toFixed(3) + " seconds"
      );
      this.level++;
      this.$resultContinue.removeClass("is-hidden");
      setTimeout(() => {
        this.$sheriff.removeClass("is-shooting");
        this.$sheriff.addClass("is-armed");
      }, 200);
      return setTimeout(() => {
        this.$sheriff.removeClass("is-armed");
      }, 1000);
    };
    this.$resultContinue = $document.find(".js-result-continue");
    this.$resultContinue.on("click", () => {
      this.$resultContinue.addClass("is-hidden");
      resetMessages();
      // if won the game
      if (this.level === 4) {
        return enterOutro();
      } else {
        // continue as normal
        return showDuelInfo();
      }
    });
    reset = () => {
      // stops game if no reaction
      death();
      clearInterval(this.$timer);
      this.$duelButton.removeClass("is-hidden");
      return this.$drawButton.addClass("is-hidden");
    };
    showDuelInfo = () => {
      this.$opponent.removeClass("is-armed");
      this.$opponent.removeClass("is-dead");
      this.$opponent.removeClass("opponent--1");
      this.$opponent.removeClass("opponent--2");
      this.$opponent.removeClass("opponent--3");
      this.$opponent.addClass("opponent--" + this.level);
      switch (this.level) {
        case 3:
          this.$messagePS.html(
            "Hitch Ravish craves shoot'n fellas like you. He's slick and smooth on the draw! Watch out!"
          );
          break;
        case 2:
          this.$messagePS.html(
            "Name's Gloria Anne. She is sneaky and is a darn good shot, and aint done fight'n until she's sent you to the bone yard with your boots on."
          );
          break;
        default:
          this.$messagePS.html(
            "Billy Boulder, also known as Billy the Big, ain't no monster of a man to monkey around with."
          );
      }
      return this.$duelButton.removeClass("is-hidden");
    };
    resetMessages = () => {
      this.$messagePS.html("");
      return this.$resultPS.html("");
    };
    enterDuelMode = () => {
      this.$duelButton.addClass("is-hidden");
      this.$drawButton.removeClass("is-hidden");
      resetMessages();
      this.delay = Math.floor(Math.random() * (6 - 1) + 1) * 1000;
      // start duel
      return (this.$duel = setTimeout(() => {
        var startTime;
        this.dueling = true;
        // style start
        this.$opponent.addClass("is-armed");
        // start timer
        startTime = Date.now();
        return (this.$timer = setInterval(() => {
          var elapsedTime;
          elapsedTime = Date.now() - startTime;
          // announce result
          this.result = elapsedTime / 1000;
          if (this.result > 2) {
            reset();
          }
        }, 10));
      }, this.delay));
    };
    noHonor = () => {
      var noHonorMessage, random;
      // if clicked to early
      clearInterval(this.$duel);
      this.$duelButton.removeClass("is-hidden");
      this.$drawButton.addClass("is-hidden");
      switch (this.noHonor) {
        case 1:
          noHonorMessage =
            "You don't want to be too sudden while shoot'n gives them an open target yah hear? They gotta draw first, dont ya get impatient!";
          this.noHonor++;
          break;
        case 2:
          noHonorMessage =
            "You're sure playin' with luck. Yuh best go gamble at the saloon if ya wanna see how lucky you can be.";
          this.noHonor++;
          break;
        default:
          random = Math.floor(Math.random() * (4 - 1)) + 1;
          switch (random) {
            case 1:
              noHonorMessage = "Mixin' it with some chance this time o' day?";
              break;
            case 2:
              noHonorMessage = "Happened kinda sudden, didn't it?";
              break;
            default:
              noHonorMessage =
                "What the devil! What fer kind of a thing shows no honour! You ain't no man!";
          }
      }
      return this.$resultPS.html(noHonorMessage);
    };

    // Duel button
    this.$duelButton.on("click", () => {
      if (this.gameOver) {
        return restart();
      } else {
        return enterDuelMode();
      }
    });
    // Draw button
    this.$drawButton.on("click", () => {
      if (this.dueling) {
        // good draw
        clearInterval(this.$timer);
        this.$opponent.removeClass("is-armed");
        this.$drawButton.addClass("is-hidden");
        switch (this.level) {
          case 3:
            if (this.result < 0.33) {
              win();
            } else {
              death();
            }
            break;
          case 2:
            if (this.result < 0.4) {
              win();
            } else {
              death();
            }
            break;
          default:
            if (this.result < 2) {
              win();
            } else {
              death();
            }
        }
      } else {
        // failed draw
        noHonor();
      }
      return (this.dueling = false);
    });

    // Outro screen -----------------------------
    this.$outroScreen = $document.find(".js-outro");
    this.$saveAndQuitButton = this.$outroScreen.find(".js-save-and-quit");
    this.$totalTime = this.$outroScreen.find(".js-total-time");
    enterOutro = () => {
      this.$totalTime.html(
        "Total time: " + this.totalTime.toFixed(3) + "seconds"
      );
      this.$playScreen.addClass("is-hidden");
      this.$outroScreen.removeClass("is-hidden");
      this.$body.addClass("game-end");
      return (this.$totalTime = 0);
    };
    return this.$saveAndQuitButton.on("click", () => {
      return restart();
    });
  });
}.call(this));

//# sourceURL=coffeescript
