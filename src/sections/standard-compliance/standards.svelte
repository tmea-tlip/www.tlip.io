<script lang="ts">
	import { Info } from "$components";

	export let id: string;
</script>

<section class="container flex flex-col gap-y-10 py-24 md:pb-36 md:pt-32" {id}>
	<p class="leading-6 tracking-0.04">
		To guarantee interoperability and legal compliance, TLIP is built in accordance with a variety of technical
		standards.
	</p>
	<Info>
		<h3 slot="title">Identity Standards</h3>
		<ul slot="items">
			<li>
				Decentralised Identities: TLIP manages identity and access using Web3 decentralised identities, allowing
				stakeholders to create and own their identity via public/private key pairs.
			</li>
			<li>
				Verifiable Credentials: Signed, verifiable attributes are added to each identity, ensuring secure and
				trusted interactions. This decentralised approach eliminates single points of failure and is resilient
				against denial-of-service attacks.
			</li>
			<li>
				W3C Compliance: TLIP adheres to the <a href="https://www.w3.org/TR/did-core" target="_blank"
					>W3C standard for decentralised identifiers</a
				>
				– specifically the
				<a href="https://github.com/iotaledger/identity.rs" target="_blank">IOTA did:method implementation</a>
				– and supports the
				<a href="https://identity.foundation/jwt-vc-presentation-profile" target="_blank"
					>JWT standard for verifiable credentials presentation.</a
				>
			</li>
		</ul>
	</Info>
	<Info>
		<h3 slot="title">Data Standards</h3>
		<p slot="description">
			To ensure compliance and facilitate integration with existing systems, TLIP leverages established data
			standards:
		</p>
		<ul slot="items">
			<li>
				<a href="https://ref.gs1.org/standards/epcis" target="_blank">GS1 EPCIS 2.0</a> for event occurrence tracking.
			</li>
			<li>
				<a href="https://ref.gs1.org/standards/digital-link" target="_blank">GS1 Digital Link</a> for collecting
				consignment properties.
			</li>
			<li>
				Standard Vocabularies including <a href="https://vocabulary.uncefact.org" target="_blank">UN/CEFACT</a>
				and <a href="https://schema.org" target="_blank">schema.org</a>, to enhance focus on documents and trade
				events.
			</li>
		</ul>
		<p slot="conclusion">
			For more details, visit our <a href="https://docs.gtsc.io/#global-trade-and-supply-chain" target="_blank"
				>TLIP Developer Wiki</a
			>.
		</p>
	</Info>
	<Info>
		<h3 slot="title">Security Standards</h3>
		<div slot="description">
			<p>
				All on-chain data in TLIP is secured through the public key cryptography used to settle transactions on
				the IOTA DLT.
			</p>
		</div>
		<ul slot="items">
			<li>
				IOTA addresses are linked to key pairs on a Twisted Edwards Curve, specifically the <a
					href="https://csrc.nist.gov/pubs/sp/800/186/final"
					target="_blank">Edwards25519 Curve</a
				>.
			</li>
			<li>
				DLT transactions are signed and verified by nodes using the <a
					href="https://csrc.nist.gov/pubs/fips/186-5/final"
					target="_blank">EdDSA signature scheme</a
				>.
			</li>
			<li>
				Addresses, identifiers, transactions, essences, and hashes (including Merkle Tree hashes) are generated
				using (generally) the <a href="https://datatracker.ietf.org/doc/html/rfc7693.html" target="_blank"
					>Blake2b-256 hash function</a
				>.
			</li>
			<li>
				The data integrity of verifiable credentials is maintained through the EdDSA signature scheme, with IETF
				JWK used for public key representation in DID documents (<a
					href="https://www.rfc-editor.org/info/rfc7517"
					target="_blank">IETF RFC7517</a
				>).
			</li>
			<li>
				Additionally, data encryption is based on <a
					href="https://datatracker.ietf.org/doc/html/rfc7539"
					target="_blank">ChaCha20Poly1305</a
				>.
			</li>
		</ul>

		<p slot="conclusion">Read our whitepaper for more details.</p>
	</Info>
	<Info>
		<h3 slot="title">Legal Standards</h3>
		<p slot="description">
			TLIP ensures legal compliance in digital trade documents by adhering to principles established by key
			regulations, particularly the <a
				href="https://uncitral.un.org/sites/uncitral.un.org/files/media-documents/uncitral/en/mletr_ebook_e.pdf"
				target="_blank">UNCITRAL Model Law on Electronic Transferable Records</a
			>(MLETR) and the
			<a href="https://bills.parliament.uk/bills/3344/publications" target="_blank">UK Electronic Trades Bill</a>.
		</p>
		<ul slot="items">
			<li>
				Under MLETR, digital trade requires methods to identify and control electronic transferable records.
				Additionally, it is essential to maintain the integrity of these electronic records.
			</li>
			<li>
				The UK Electronic Trades Bill mandates that electronic trade systems must distinguish documents from
				their copies and protect them against unauthorised alterations. Furthermore, the Bill enables the
				transition from paper to digital-only documents, provided that proper conversion statements are
				available.
			</li>
		</ul>
		<p slot="conclusion">
			TLIP’s use of IOTA’s DLT and decentralised identities meets stringent security, integrity, and auditability
			standards. Additionally, TLIP employs unique QR codes to link a document’s paper copy to its digital version
			for improved auditability and verification.
		</p>
	</Info>
</section>
