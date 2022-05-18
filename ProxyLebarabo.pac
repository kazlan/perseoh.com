function FindProxyForURL(url, host)
{
url = url.toLowerCase();
host = host.toLowerCase();
var resolved_ip=dnsResolve(host);
var proxyMarktel="PROXY 172.21.0.104:3128";
var proxyMarktele="PROXY 172.16.73.121:3128";
var proxyMasmovil="PROXY 172.30.47.8:8080";
// Añado sección para google apis - jorge 18/05/22
if (
    dnsDomainIs(host,"googleapis.com")||
    dnsDomainIs(host,"discord.com")
    )
return proxyMarktel;
if (
dnsDomainIs(host,"clientes.yoigo.inet")||
dnsDomainIs(host,"mosaic2.yoigo.inet")||
dnsDomainIs(host,"distribuidor.yoigo.com")||
dnsDomainIs(host,"clientes.yoigo.com")||
dnsDomainIs(host,"recobro.masmovil.com")||
dnsDomainIs(host,"televenta.yoigo.com")||
dnsDomainIs(host,".netkia.es")||
dnsDomainIs(host,"jira.masmovil.com")||
dnsDomainIs(host,"opit.masmovil.com")||
dnsDomainIs(host,".lycamobile.es")||
// cambio sit por prod - jorge 18/05/22
dnsDomainIs(host,"sct-mmlyle-prod-mm.qvantel.solutions")||
dnsDomainIs(host,"auth-mmlyle-prod.qvantel.solutions")||
dnsDomainIs(host,".iber.lan")||
dnsDomainIs(host,"ibervoz.com")||
dnsDomainIs(host,"solaire.masmovil.com")||
dnsDomainIs(host,"agri.ibercomtelecom.es")||
dnsDomainIs(host,".xtratelecom.es")||
dnsDomainIs(host,"admingopbx.yoigoempresas.com")||
dnsDomainIs(host,"smadavbtr.yoigo.inet")||
dnsDomainIs(host,"schaman.yoigo.com")||
dnsDomainIs(host,"koala.yoigo.inet")||
dnsDomainIs(host,"wikitopo.masmovil.com")||
dnsDomainIs(host,"smadava74.yoigo.inet")||
dnsDomainIs(host,"smadava03.yoigo.inet")||
dnsDomainIs(host,"k8s.masmovil.com")||
dnsDomainIs(host,"masmovilenergia.tools")||
dnsDomainIs(host,"corporate-auth.masmovilenergia.tools")||
dnsDomainIs(host,".apigee.net")||
dnsDomainIs(host,"scriptingagenteb2b.masmovil.com")||
dnsDomainIs(host,"minerva.grupomasmovil.com")||
dnsDomainIs(host,"rimanager.masmovil.com")
)
return proxyMasmovil;
if (
isInNet(host,"172.30.112.208","255.255.255.255")||
isInNet(host,"172.30.112.202","255.255.255.255")||
isInNet(host,"172.30.201.207","255.255.255.255")||
isInNet(host,"172.30.70.13","255.255.255.255")||
isInNet(host,"10.245.1.5","255.255.255.255")||
isInNet(host,"10.5.57.148","255.255.255.255")||
isInNet(host,"10.34.133.76","255.255.255.255")||
isInNet(host,"10.100.6.19","255.255.255.255")||
isInNet(host,"10.100.6.80","255.255.255.255")||
isInNet(host,"10.34.134.226","255.255.255.255")||
isInNet(host,"10.100.6.22","255.255.255.255")||
isInNet(host,"10.100.8.11","255.255.255.255")||
isInNet(host,"194.140.77.1","255.255.255.255")||
isInNet(host,"10.30.70.13","255.255.255.255")||
isInNet(host,"83.137.0.141","255.255.255.255")
)
return proxyMasmovil;
if (
dnsDomainIs(host,"crm.hitsmobile.es")||
dnsDomainIs(host,".m2hits.es")
)
return proxyMarktele;

return direct;
}
