---
title: Έξυπνα συμβόλαια
description: Μια μη τεχνική εισαγωγή στα έξυπνα συμβόλαια
lang: el
---

# Εισαγωγή στα έξυπνα συμβόλαια {#introduction-to-smart-contracts}

Τα έξυπνα συμβόλαια αποτελούν τα θεμελιώδη δομικά στοιχεία του επιπέδου εφαρμογών του Ethereum. Είναι προγράμματα υπολογιστών που είναι αποθηκευμένα στην κρυπτοαλυσίδα, τα οποία ακολουθούν τη λογική «αν συμβεί αυτό, τότε αυτό» και είναι εγγυημένα ότι εκτελούνται σύμφωνα με τους κανόνες που ορίζονται από τον κώδικά του, ο οποίος δεν μπορεί να αλλάξει από τη στιγμή που θα δημιουργηθεί.

Ο Nick Szabo επινόησε τον όρο «έξυπνο συμβόλαιο». Το 1994, έγραψε [μια εισαγωγή σε αυτή την έννοια](https://www.fon.hum.uva.nl/rob/Courses/InformationInSpeech/CDROM/Literature/LOTwinterschool2006/szabo.best.vwh.net/smart.contracts.html) και το 1996 [μια ερεύνα για το τι θα μπορούσαν να κάνουν τα έξυπνα συμβόλαια](https://www.fon.hum.uva.nl/rob/Courses/InformationInSpeech/CDROM/Literature/LOTwinterschool2006/szabo.best.vwh.net/smart_contracts_2.html).

Ο Szabo οραματίστηκε μια ψηφιακή αγορά όπου οι αυτόματες και κρυπτογραφικά ασφαλείς διαδικασίες επιτρέπουν τις συναλλαγές και τις επιχειρηματικές λειτουργίες να πραγματοποιούνται χωρίς την ανάγκη αξιόπιστων μεσαζόντων. Τα έξυπνα συμβόλαια στο Ethereum κάνουν το όραμα πράξη.

### Εμπιστοσύνη στα συμβατικά συμβόλαια {#trust-and-contracts}

Ένα από τα μεγαλύτερα προβλήματα με ένα παραδοσιακό συμβόλαιο, είναι η ανάγκη ύπαρξης αξιόπιστων ατόμων για ορθά αποτελέσματα.

Δείτε ένα παράδειγμα:

Η Alice και ο Bob θα κάνουν έναν αγώνα ποδηλάτου. Ας πούμε ότι η Alice στοιχηματίζει με τον Bob $10 πως θα κερδίσει τον αγώνα. Ο Bob είναι σίγουρος ότι θα είναι νικητής και συμφωνεί με αυτό το στοίχημα. Στο τέλος, η Alice τελειώνει τον αγώνα πολύ μπροστά από τον Μπομπ και είναι η ξεκάθαρη νικήτρια. Αλλά ο Bob αρνείται να πληρώσει το στοίχημα, ισχυριζόμενος ότι η Alice έκλεψε στον αγώνα.

Αυτό το χαζό παράδειγμα καταδεικνύει το πρόβλημα με οποιοδήποτε μη έξυπνο συμβόλαιο. Ακόμη και αν πληρούνται οι προϋποθέσεις της συμφωνίας (δηλ. είσαστε ο νικητής του αγώνα), θα πρέπει να εμπιστευθείτε ένα άλλο άτομο για να εκπληρώσει τη συμφωνία (δηλ. την πληρωμή του στοιχήματος).

### Ένας ψηφιακός αυτόματος πωλητής {#vending-machine}

Ένα απλό παράδειγμα έξυπνου συμβολαίου είναι μια μηχανή αυτόματης πώλησης, η οποία λειτουργεί κάπως παρόμοια με ένα έξυπνο συμβόλαιο όπου συγκεκριμένες ενέργειες εγγυώνται προκαθορισμένα αποτελέσματα.

- Επιλέγετε ένα προϊόν
- Ο αυτόματος πωλητής εμφανίζει την τιμή
- Πληρώνετε το τίμημα
- Ο αυτόματος πωλητής επαληθεύει ότι πληρώσατε το σωστό ποσό
- Ο αυτόματος πωλητής σας δίνει το αντικείμενο σας

Ο αυτόματος πωλητής θα σας δώσει το προϊόν σας μόνο όταν θα πληρούνται όλες οι προϋποθέσεις. Αν δεν επιλέξετε ένα προϊόν ή δεν εισάγετε αρκετά χρήματα, ο αυτόματος πωλητής δε θα σας δώσει το προϊόν.

### Αυτόματη εκτέλεση {#automation}

Το κύριο πλεονέκτημα ενός έξυπνου συμβολαίου είναι ότι εκτελεί πάντοτε τον σαφή κώδικα όταν πληρούνται συγκεκριμένες προϋποθέσεις. Δε χρειάζεται να περιμένουμε κάποιον να ερμηνεύσει ή να διαπραγματευτεί το αποτέλεσμα. Με αυτό τον τρόπο αφαιρείται η ανάγκη για αξιόπιστους μεσάζοντες.

Για παράδειγμα, θα μπορούσατε να συντάξετε ένα έξυπνο συμβόλαιο που κρατά κεφάλαια αποταμίευσης για ένα παιδί, επιτρέποντάς το να αποσύρει αυτά τα κεφάλαια μετά από μια συγκεκριμένη ημερομηνία. Εάν προσπαθήσει να κάνει ανάληψη πριν από αυτή την ημερομηνία, το έξυπνο συμβόλαιο δε θα εκτελεστεί. Διαφορετικά, θα μπορούσατε να συντάξετε ένα συμβόλαιο που σας δίνει αυτόματα μια ψηφιακή έκδοση του τίτλου ενός αυτοκινήτου όταν πληρώσετε τον αντιπρόσωπο.

### Προβλέψιμα αποτελέσματα {#predictability}

Τα παραδοσιακά συμβόλαια είναι διφορούμενα επειδή βασίζονται στον άνθρωπο για την ερμηνεία και την εφαρμογή τους. Για παράδειγμα, δύο δικαστές πιθανός να ερμηνεύσουν διαφορετικά ένα συμβόλαιο, γεγονός που θα μπορούσε να οδηγήσει σε ασυνεπείς αποφάσεις και άνισα αποτελέσματα. Τα έξυπνα συμβόλαια αφαιρούν αυτή την πιθανότητα. Αντιθέτως, τα έξυπνα συμβόλαια εκτελούνται ακριβώς με βάση τους όρους που αναγράφονται στον κώδικα της σύμβασης. Αυτή η ακρίβεια σημαίνει ότι, δεδομένων των ίδιων περιστάσεων, ένα έξυπνο συμβόλαιο θα αποδώσει το ίδιο αποτέλεσμα.

### Δημόσια εγγραφή {#public-record}

Τα έξυπνα συμβόλαια είναι χρήσιμα στον έλεγχο και παρακολούθηση. Δεδομένου ότι τα έξυπνα συμβόλαια του Ethereum βρίσκονται σε δημόσια κρυπτοαλυσίδα, ο καθένας μπορεί να παρακολουθήσει άμεσα τις μεταφορές περιουσιακών στοιχείων και άλλες σχετικές πληροφορίες. Για παράδειγμα, μπορείτε να ελέγξετε ότι κάποιος έστειλε χρήματα στη διεύθυνσή σας.

### Προστασία ιδιωτικότητας {#privacy-protection}

Τα έξυπνα συμβόλαια προστατεύσουν επίσης το απόρρητό σας. Δεδομένου ότι το Ethereum είναι ένα δίκτυο με ψευδώνυμα (οι συναλλαγές σας συνδέονται δημοσίως με μια μοναδική κρυπτογραφημένη διεύθυνση και όχι με την ταυτότητά σας), μπορείτε να προστατεύσετε το απόρρητο σας από παρατηρητές.

### Ορατοί όροι {#visible-terms}

Τέλος, όπως τα παραδοσιακά συμβόλαια, μπορείτε να ελέγξετε τι υπάρχει σε ένα έξυπνο συμβόλαιο πριν το υπογράψετε (ή να το χειριστείτε διαφορετικά). Η διαφάνεια ενός έξυπνου συμβολαίου εγγυάται ότι ο καθένας μπορεί να το ελέγξει.

## Χρήσεις ενός έξυπνου συμβολαίου {#use-cases}

Τα έξυπνα συμβόλαια μπορούν να κάνουν ουσιαστικά οτιδήποτε μπορούν να κάνουν τα προγράμματα υπολογιστών.

Μπορούν να εκτελέσουν υπολογισμούς, να δημιουργήσουν ένα νόμισμα, να αποθηκεύσουν δεδομένα, να δημιουργήσουν NFT, να επικοινωνήσουν, ακόμη και να δημιουργήσουν γραφικά. Δείτε μερικά δημοφιλή, αληθινά παραδείγματα:

- [Κρυπτονομίσματα σταθερής αξίας](/stablecoins/)
- [Δημιουργία και διανομή μοναδικών ψηφιακών περιουσιακών στοιχείων](/nft/)
- [Ένα αυτόματο, ανοικτό ανταλλακτήριο νομισμάτων](/get-eth/#dex)
- [Αποκεντρωμένα παιχνίδια](/dapps/?category=gaming)
- [Μια πολιτική ασφάλισης που πληρώνει αυτόματα](https://etherisc.com/)
- [Ένα πρότυπο που επιτρέπει στους ανθρώπους να δημιουργήσουν προσαρμοσμένα και διαλειτουργικά νομίσματα](/developers/docs/standards/tokens/)

## Περισσότερα από έναν εικονικό μαθητή; {#visual-learner}

Δείτε τη Finematics να εξηγεί τα έξυπνα συμβόλαια:

<YouTube id="pWGLtjG-F5c" />

## Περισσότερες πληροφορίες {#further-reading}

- [Πώς θα αλλάξουν τον κόσμο τα έξυπνα συμβόλαια](https://www.youtube.com/watch?v=pA6CGuXEKtQ)
- [Έξυπνα Συμβόλαια: Η τεχνολογία blockchain που θα αντικαταστήσει τους δικηγόρους](https://blockgeeks.com/guides/smart-contracts/)
- [Έξυπνες συμβόλαια για προγραμματιστές](/developers/docs/smart-contracts/)
- [Μάθετε να συντάσσετε έξυπνα συμβόλαια](/developers/learning-tools/)
- [Mastering Ethereum - Τι είναι ένα έξυπνο συμβόλαιο;](https://github.com/ethereumbook/ethereumbook/blob/develop/07smart-contracts-solidity.asciidoc#what-is-a-smart-contract)