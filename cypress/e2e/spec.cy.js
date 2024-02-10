describe('Make sure our todo list app is working well', () => {
    it('Test that we can open a browser and load our app', () => {
        cy.visit("http://192.168.1.7:4000");
    })
    it('Vérifier que lorsque vous cliquez sur le bouton “lancer une partie” laffichage propose bien à utilisateur de saisir un mot', () => {
        cy.visit("http://192.168.1.7:4000");
        cy.get("#btnstart").click();
        cy.get("#champ").should('be.empty')
    })
    it('Vérifiez que lorsque vous saisissez “zzzzz”, vous avez le message d’erreur "mot invalide” qui apparaît',() => {
        cy.visit("http://192.168.1.7:4000");
        cy.get("#btnstart").click();
        cy.get("#champ").should('be.empty')
        cy.get("#champ").type('zzzzz')
        cy.get("#btn").click();
        cy.get("#reponse").should('have.text','Vous devez entrer un mot en français, attention !')
    })
    it('Vérifiez que lorsque vous saisissez le mot ”jante”, celui-ci est bien accepté.',() => {
        cy.visit("http://192.168.1.7:4000");
        cy.get("#btnstart").click();
        cy.get("#champ").should('be.empty')
        cy.get("#champ").type('jante')
        cy.get("#btn").click();
        cy.get("#reponse").should('not.have.text','Vous devez entrer un mot en français, attention !')
        cy.get("#reponse").should('not.have.text','Vous devez entrer un mot de 5 lettres, attention!')

    })
    it('Vérifiez que lorsque vous appuyez sur le bouton “abandonner la partie”, vous arrivez bien sur une page de défaite',() => {
        cy.visit("http://192.168.1.7:4000");
        cy.get("#btnstart").click();
        cy.get("#abandon").click();
        cy.url().should('eq', 'http://192.168.1.7:4000/pageDefaite/') 
    })
    it('Lorsque vous accédez aux statistiques, vérifiez bien que vous avez la page des statistiques qui s’affiche',() => {
        cy.visit("http://192.168.1.7:4000");
        cy.get("#btnhistorique").click()
        cy.url().should('eq', 'http://192.168.1.7:4000/partiesJouees/') 
        cy.get("#btnstats").click()
        cy.url().should('eq', 'http://192.168.1.7:4000/statistiques/') 


    })
})

