
        function checksonguyento() {
            // khai bao bien
            let canhbao = true;
            let n = Number(document.getElementById("n").value)

            let i = 2
            console.log(n)
            // check n >=2
            if (n < 2) {
                canhbao = false;
            }
            else {
                if (n === 2) {
                    canhbao = true
                }
                else {
                    // checktừ 2 tới n-1
                    for (i = 2; i < n - 1; i++) {
                        if (n % i == 0) {
                            canhbao = false;
                            break;
                        }
                    }
                }

                // thong bao
                if (canhbao == true) {
                    alert(n + " là số nguyên tố ");
                }
                else {
                    alert(n + " không phải là số nguyên tố ");
                }
            }
        }

