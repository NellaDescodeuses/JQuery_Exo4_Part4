$(document).ready(function () {
    $('button').click(function () { 
        //Variable pour récupérer les valeurs de mes inputs.
        let firstNameValue = $('#firstName').val();
        let lastNameValue = $('#lastName').val();
        let birthDateValue = $('#birthDate').val();
        let birthLocationValue = $('#birthLocation').val();
        let jobValue = $('#job').val();
        let companyValue = $('#company').val();

        //je crée les régex
        /*
        REGEX firsNameReg et lastNameReg
        - le nom doit impérativement commencer par un caractère majuscule (caractère spéciaux compris) suivi de minuscule ou d'une apostrophe.
        - je crée une sous classe qui contien également une chaine de caractères avec un tiret (pour les prénoms composés)
        - le + rend oblihgatoire ce qui précède.
        - les () font des sous classes.
        - le ? précise que ce qui précède n'est pas pas obligatoire
        */
        let firstNameReg = /^[A-ZÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ][a-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšž']+([-][A-Za-z][a-z]+)?$/;
        let lastNameReg = /^[A-ZÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð][a-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšž']+([-][A-Z][a-z]+)?$/;
        
        /*
        REGEX date de naissance
        - 2 chiffre de 0 à 9
        - qauntificateur de {2} ou {4} n,ombre de chiffres obligatoire
        */
        let birthDateReg = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
       //2eme possibilité plus complexe pour la régex date de naissance
       /*
       Pour le jour : 1er chiffre va de 0 à 2, le second chiffre de 0 à 9[1-9] et si le 1er chiffre est 3, seul 0 ou 1 son a
       Pour le mois : Si le 1er chiffre commance pas zéro (0), le second chiffre est de 1 à 9[1-9], si le 1er chiffre est 1, le second ira de 0 à 2.
       \d = [0-9] 
       */
       // let birthDateReg = /^([0-2][0-9]|(3)[0-1])\/(0[1-9]|1[0-2])\/(19[0-9]\d|200\d|201[0-9]|202[0-1])$/
                            
        let birthLocationReg = /^[A-ZÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ][a-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšž']+([-][A-Za-z][a-z]+)?$/;
        let jobReg = /^[A-Za-zÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ][a-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšž']+([-][A-Za-z][a-z]+)?$/;
        let companyReg = /^[A-Za-zÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ][a-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšž']+([-][A-Za-z][a-z]+)?$/;

            //peut aussi s'écrire (firstNameReg.test(firstNameValue == false))
            if (!lastNameReg.test(lastNameValue)) {
                $('#lastName').css('border', '2px solid red');
                $('#errorLastName').html('*Vérifiez votre saisie').css('color', 'red');
            
            }else{
                $('#lastName').css('border', '2px solid green');
            }
            if (!firstNameReg.test(firstNameValue)) {
                $('#firstName').css('border', '2px solid red');
                $('#errorFirstName').html('*Vérifiez votre saisie').css('color', 'red');
            }else{
                $('#firstName').css('border', '2px solid green');
            }
            if (!birthDateReg.test(birthDateValue)) {
                $('#birthDate').css('border', '2px solid red');
                $('#errorbirthDate').html('*Vérifiez votre saisie').css('color', 'red');
            }else{
                $('#birthDate').css('border', '2px solid green');
            }
            if (!birthLocationReg.test(birthLocationValue)) {
                $('#birthLocation').css('border', '2px solid red');
                $('#errorbirthLocation').html('*Vérifiez votre saisie').css('color', 'red');
            }else{
                $('#birthLocation').css('border', '2px solid green');
            }
            if (!jobReg.test(jobValue)) {
                $('#job').css('border', '2px solid red');
                $('#errorJob').html('*Vérifiez votre saisie').css('color', 'red');
            }else{
                $('#job').css('border', '2px solid green');
            }
            if (!companyReg.test(companyValue)) {
                $('#company').css('border', '2px solid red');
                $('#errorCompany').html('*Vérifiez votre saisie').css('color', 'red');
            }else{
                $('#company').css('border', '2px solid green');
            }
            if(firstNameValue && lastNameValue && jobValue && birthDateValue && birthLocationValue && companyValue){
                alert('OK');
            }            
                
    });
            
            
});