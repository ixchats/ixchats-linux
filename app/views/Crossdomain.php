<?xml version="1.0"?>
<!DOCTYPE cross-domain-policy SYSTEM "http://www.macromedia.com/xml/dtds/cross-domain-policy.dtd">
<cross-domain-policy>
<site-control permitted-cross-domain-policies="master-only"/>
<allow-access-from domain="*.<?php echo DOMAIN;?>" to-ports="*"/>
<allow-access-from domain="<?php echo DOMAIN;?>" to-ports="*"/>
</cross-domain-policy>