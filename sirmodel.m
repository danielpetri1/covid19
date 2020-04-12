%x(1) is Susceptible, x(2) is Infected, x(3) is Recovered
%D = 1 / b is days to recover from disease, i.e. 14 days. b = 1 / 14
%R_0 = a / b; assuming R_0 = 1.4, we know a = R_0 * b = 1.4 / 14 = 0.1

figure

a = 0.1; %Contact rate
b = 1 / 14; %Recovery rate

f = @(t,x) [-a*x(1)*x(2);a*x(1)*x(2)-b*x(2);b*x(2)];

s0 = 0.998;
i0 = 0.002; %assuming 0.2% of the population is infected
r0 = 0;

tfinal = 700;

[t,xa] = ode45(f,[0 tfinal], [s0 i0 r0]);
 plot(t,xa(:,1))
 hold on
 plot(t,xa(:,2),'k')
 plot(t,xa(:,3),'r')
 hold off
 
 legend({'susceptible','infected', 'recovered'},'Location','northeast')
