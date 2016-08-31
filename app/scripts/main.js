$(function() {

  var $whoami = $('#whoami');
  var $whoamiCmd = $('#whoami-command');
  var $skillsSentence = $('.sentence.skills');
  var $skillsCmd = $('#skills-command');
  var $certificationsSentence = $('.sentence.certifications');
  var $certificationsCmd = $('#certifications-command');
  var $experienceSentence = $('.sentence.experience');
  var $experienceCmd = $('#experience-command');

  $whoamiCmd.typed({
    strings: ['whoami'],
    typeSpeed: 50,
    startDelay: 2000,
    cursorChar: '|',
    callback: function() {
      setTimeout(showWhoami, 1000);
    }
  });

  function showWhoami() {
    $whoamiCmd.closest('.sentence').find('.typed-cursor').hide();
    $whoami.slideDown('fast', showSkillsSentence);
  }

  function showSkillsSentence() {
    $skillsSentence.show();
    $skillsCmd.typed({
      strings: ['ls skills'],
      typeSpeed: 50,
      startDelay: 1000,
      cursorChar: '|',
      callback: showSkills
    });
  }

  function showSkills() {
    $skillsCmd.closest('.sentence').find('.typed-cursor').hide();
    $('#skills').slideDown('fast', function() {
      $('#skill-js').css('width', '98%');
      $('#skill-java').css('width', '85%');
      $('#skill-php').css('width', '98%');
      $('#skill-python').css('width', '35%');
      $('#skill-swift').css('width', '35%');
      $('#skill-nosql').css('width', '90%');
      $('#skill-sql').css('width', '95%');
      $('#skill-sysadmin').css('width', '85%');
      showCertificationsSentence();
    });
  }

  function showCertificationsSentence() {
    $certificationsSentence.show();
    $certificationsCmd.typed({
      strings: ['cat estudios'],
      typeSpeed: 50,
      startDelay: 1000,
      cursorChar: '|',
      callback: showCertifications
    });
  }

  function showCertifications() {
    $certificationsCmd.closest('.sentence').find('.typed-cursor').hide();
    $('#certifications').slideDown('fast', showExperienceSentence);
  }

  function showExperienceSentence() {
    $experienceSentence.show();
    $experienceCmd.typed({
      strings: ['tail jobs'],
      typeSpeed: 50,
      startDelay: 1000,
      cursorChar: '|',
      callback: showExperience
    });
  }

  function showExperience() {
    $experienceCmd.closest('.sentence').find('.typed-cursor').hide();
    $('#experience').slideDown('fast', function() {});
  }

});
