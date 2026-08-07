# Sistema de Estados Limbus Company (Burn & Bleed)

Este sistema reemplaza las mecánicas binarias tradicionales de 5e por un sistema acumulativo (basado en el juego Limbus Company). Cada estado alterado tiene dos valores fundamentales: **Potencia (Potency)** y **Conteo (Count)**. 

Se representa siempre como: `[Estado] [Potencia] / [Conteo]`. (Ejemplo: `Burn 5/2`).

## Regla de Acumulación
Cuando aplicas un estado a alguien que ya lo tiene, **la Potencia se suma** y **el Conteo se actualiza** (normalmente se suma el conteo nuevo o se queda el mayor, según decidas, pero por defecto se suma el conteo para mantener el estado vivo).
*Ejemplo:* Un enemigo tiene `Burn 3/1`. Le atacas con una habilidad que aplica `Burn 4/2`. El enemigo pasa a tener `Burn 7/2`.

---

### 🔥 Burn (Quemadura)
El fuego se pega a la piel y armadura. Este estado utiliza un único valor que se acumula y se disipa gradualmente.
- **Trigger:** Al **final del turno** de la criatura afectada.
- **Efecto:** La criatura recibe 1d6 de Daño de Fuego por cada **Burn**.
- **Resolución:** Tras recibir el daño, el valor de **Burn se divide entre 2** (redondeando hacia abajo, mínimo 1). Desaparece cuando baja de 1.
- **Acumulación:** Si recibes un ataque que aplica Burn, el nuevo valor se **suma** al que ya tenías.
- **Limpieza (Counterplay):** Una criatura puede usar su **Acción** para apagar las llamas (tirarse al suelo y rodar, arrancar la armadura ardiendo, etc), eliminando el estado por completo instantáneamente.
---

### 🩸 Bleed (Sangrado)
Heridas abiertas o metralla clavada que se desgarra con el movimiento brusco.
- **Trigger:** Cada vez que la criatura afectada hace una **Tirada de Ataque** (Attack Roll), lanza un hechizo con componente somático o usa su Acción para algo físico (Dash).
- **Efecto:** La criatura recibe Daño Cortante/Perforante igual a su **Potencia** exacta justo antes de que se resuelva su acción.
- **Resolución:** Tras recibir el daño, el **Conteo** se reduce en 1. Si el Conteo llega a 0, el estado desaparece.
- **Limpieza (Counterplay):** El sangrado se cauteriza o cierra al recibir cualquier tipo de **Curación Mágica** (independientemente de la cantidad curada), eliminando el estado por completo instantáneamente.
- *Ejemplo en mesa:* Un jugador tiene `Bleed 4/3` y hace un ataque múltiple (2 ataques). Al hacer el primer ataque recibe 4 de daño (baja a `Bleed 4/2`). Al hacer el segundo ataque recibe otros 4 de daño (baja a `Bleed 4/1`).
