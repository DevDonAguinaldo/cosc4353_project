module.exports = {
    suggested: function(loc, qh, gal) {
        // FACTOR VARIABLES
        let locFactor    = 0.0;
        let rhFactor     = 0.0;
        let galFactor    = 0.0;
        let rfFactor     = 0.0;
        let margin       = 0.0;
        const compFactor = 0.10;

        // CHECK LOCATION FACTOR
        if(inState(loc)) {
            locFactor = 0.02;
        } else {
            locFactor = 0.04;
        }

        // CHECK QUOTE HISTORY
        if(hasHistory(qh)) {
            rhFactor = 0.01;
        } else {
            rhFactor = 0.0;
        }

        // CHECK GALLON AMOUNT
        if(gal > 1000) {
            galFactor = 0.02;
        } else {
            galFactor = 0.03;
        }

        // CHECK RATE FLUCTUATION
        if(inSummer(loc)) {
            rfFactor = 0.04;
        } else {
            rfFactor = 0.03;
        }

        // MARGIN OF PRICE
        margin = 1.50 * (locFactor - rhFactor + galFactor + compFactor + rfFactor);
        
        // SUGGESTED PRICE
        return 1.50 + margin;
    },
};