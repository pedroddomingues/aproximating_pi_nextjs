This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Aproximating pi!
This project uses the Monte Carlo method to aproximate the value of pi.

I haven't been programming with React for months so there is a lot to improve.
If you have any suggestion please contact me or open an issue.

The design is not my passion but I did my best.

## Explanation (pt-br)
Bom, pra começar, o que é a constante pi? pi é a razão entre o perímetro e o diâmetro de uma circunferência. Ele é uma constante porque seu valor independe do tamanho da circunferência, será o mesmo tanto pra uma moeda quanto pra roda de um carro ou até mesmo o sol (se você aproximar sua forma à uma circunferência).

Agora eu te pergunto: dada essa definição, como você calcularia o valor de pi? Se você pensou em medir um objeto circular, você está certo! Apesar de todas as imprecisões embutidas nos valores, você pode dizer COM CERTEZA que aquele é o valor correto de pi. Utilizando um moeda de exemplo, seria algo como pi = 3,1385 +- 0,0231 utilizando 4 casas decimais.
Mas este valor não é exato pois pi é um número irracional, ou seja, decimal, infinito e não periódico; o que quer dizer que NUNCA encontraremos seu valor exato. Mas vários matemágicos não se contentam com isso e criaram algumas fórmulas para calcular com precisão muitas casas decimais (atualmente estamos em 62,8 trilhões de casas decimais)

O que vamos fazer não é o cálculo exato mas sim uma aproximação e usaremos o método de Monte Carlo, que consiste em usar amostras aleatórias para resolver algum problema. Este método é muito utilizado em Machine Learning e se você gosta de IA e Machine Learning mas não conhece o Universo Programado você é um bobão.
[https://www.youtube.com/c/UniversoProgramado](https://www.youtube.com/c/UniversoProgramado) 

Pense num circulo de raio r agora pense que este circulo está dentro de um quadrado de lado 2r, qual a probabilidade de um ponto aleatório de coordenadas (x,y) cair dentro do circulo?
Bom, é só pensar na área que eles ocupam: a probabilidade é igual à razão entre a área do círculo divida pela área total, que é a do quadrado. Ou seja:

P([X,Y] ∈ circle) = πr^2/(2r)^2 = πr^2/4r^2 = π/4

***(a notação matemática provavelmente está errada, desculpem profs)***

Agora, conforme geramos os números aleatórios podemos analisar a mostra:

Q([X,Y] ∈ circle) = Tpontoscirculo / Tpontos

onde T significa a quantidade total, logo, podemos aproximar:

P([X,Y] ∈ circle) ≈ Q([X,Y] ∈ circle) ⇒ Tpontoscirculo / Tpontos ≈ π/4 ⇒ π ≈ 4 * Tpontoscirculo / Tpontos

Pois é, parece simples, né? E é mesmo!
