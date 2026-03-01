# FFP License - Frequently Asked Questions (FAQ)

## General Questions

### What is the FFP License?

The **FFP (Freedom For People) License** is a free and permissive open-source license designed to maximize human freedom by ensuring that software, documentation, art, media, data, and other copyrightable works remain available for anyone to use, study, modify, and share.

### Why was the FFP License created?

The FFP License was created to provide a balanced approach to open licensing that:
- Grants broad permissions for use, modification, and distribution
- Includes patent protection provisions
- Requires attribution and license preservation
- Protects against patent litigation abuse
- Maintains simplicity and clarity

### What does "FFP" stand for?

FFP stands for **Freedom For People**, emphasizing the license's focus on maximizing human freedom and accessibility.

## Usage Questions

### Can I use FFP-licensed software commercially?

**Yes!** The FFP License explicitly allows commercial use. You can:
- Use the software in commercial products
- Sell products that include FFP-licensed code
- Offer services based on FFP-licensed works
- Integrate it into proprietary software

### Do I need to disclose my source code?

**No.** The FFP License does not require you to disclose or open-source your modifications or derivative works. However, you must:
- Include a copy of the FFP License with any distribution
- Preserve copyright and attribution notices
- Not restrict recipients' rights to the original licensed work

### Can I relicense FFP-licensed code under a different license?

You cannot relicense the original code under a different license, but you can:
- Distribute it under the FFP License with additional terms (that don't conflict)
- Create derivative works and license your own contributions differently (though the original FFP code remains under FFP)
- Dual-license your own original work if you're the copyright holder

### What attribution is required?

You must:
- Include a copy of the FFP License with your distribution
- Preserve all copyright notices present in the original work
- Preserve all license notices and attribution notices
- Not remove or alter existing attribution

You do NOT need to:
- Add specific attribution in your UI or documentation (unless the original work requires it)
- List all contributors individually (just preserve existing notices)

## Patent Questions

### Does the FFP License include a patent grant?

**Yes.** The FFP License includes an explicit patent grant. Contributors automatically grant you a patent license for their contributions, allowing you to use the work without fear of patent litigation from contributors.

### What happens if I sue someone for patent infringement?

If you initiate patent litigation claiming that the FFP-licensed work infringes your patent, you automatically lose all patent rights granted to you under the FFP License for that work. This is called the "patent retaliation" clause.

This provision:
- Only terminates patent rights, not copyright rights
- Only applies if you sue about the specific FFP-licensed work
- Protects the open-source community from patent trolling

### Does the FFP License protect me from patent lawsuits?

The FFP License provides some patent protection:
- Contributors grant you a patent license for their contributions
- Patent litigation triggers termination of the aggressor's patent rights
- However, it doesn't protect against patents held by third parties who aren't contributors

## Compatibility Questions

### Is FFP compatible with GPL?

The FFP License has different terms than the GPL, particularly regarding source code disclosure. Compatibility depends on the specific GPL version and how you're combining the works. Generally:
- **GPL-licensed code cannot be incorporated into FFP-licensed projects** without making the combined work GPL
- **FFP-licensed code might be incorporated into GPL projects** (check with a lawyer for your specific case)

### Is FFP compatible with MIT/BSD licenses?

**Generally yes.** FFP is permissive like MIT and BSD. You can typically:
- Combine FFP-licensed code with MIT/BSD code
- Use FFP-licensed libraries in MIT/BSD projects
- Include MIT/BSD code in FFP projects

Always preserve the respective license notices.

### Is FFP compatible with Apache 2.0?

**Likely yes.** FFP and Apache 2.0 share similar patent provisions and permissive terms. However:
- Both licenses must be included when combining code
- All notices must be preserved
- Consider consulting a lawyer for complex combinations

### Can I use FFP-licensed code in proprietary software?

**Yes!** The FFP License is permissive and allows use in proprietary software, as long as you:
- Include the FFP License with your distribution
- Preserve copyright and attribution notices
- Don't restrict recipients' rights to the FFP-licensed portions

## Compliance Questions

### What files must I include when distributing FFP-licensed software?

You must include:
1. A copy of the FFP License (typically in a LICENSE file)
2. All copyright notices from the original work
3. All license notices and attribution notices

### Can I modify the copyright notice?

**No.** You must preserve existing copyright notices. However:
- You can add your own copyright notice for your contributions
- You cannot remove or alter existing notices
- You should add your copyright to modified files

### What if I only use FFP-licensed code internally?

If you only use the code internally (within your organization) without distributing it to third parties, you generally don't need to comply with distribution requirements. However:
- Keep the license file for your records
- Be aware of what constitutes "distribution" (it doesn't include network use)
- Consider compliance good practice anyway

### Can I use a different name for the LICENSE file?

The FFP License requires you to include the license "in the form of a LICENSE file, documentation, or other reasonable and accessible location." So you can:
- Use LICENSE, LICENSE.txt, LICENSE.md
- Use COPYING (traditional alternative)
- Include it in documentation
- Make it accessible in a reasonable way

## Termination Questions

### What happens if I violate the FFP License?

Your rights under the license terminate automatically if you:
- Fail to comply with distribution conditions (Section 4)
- Initiate patent litigation (Section 3.2)

### Can my rights be reinstated?

**Yes, for distribution violations.** If you:
1. Stop all violations
2. The copyright holder doesn't explicitly terminate your license
3. You weren't notified of the violation within 60 days

Your license is reinstated. However:
- Patent litigation terminations are NOT reinstated
- You should cure violations as soon as possible

## Warranty and Liability Questions

### Does the FFP License come with any warranty?

**No.** The work is provided "as is" without any warranties, including:
- Warranties of merchantability
- Fitness for a particular purpose
- Non-infringement
- Any other express or implied warranties

### Am I liable if someone uses my FFP-licensed software and something goes wrong?

**Generally no.** The FFP License includes a limitation of liability that disclaims liability for:
- Direct, indirect, incidental damages
- Consequential or punitive damages
- Any damages arising from use of the work

However, this may vary by jurisdiction. Consult a lawyer for specific situations.

## Contribution Questions

### If I contribute to an FFP-licensed project, what license applies to my contribution?

The FFP License uses an "inbound = outbound" rule. Your contributions are automatically licensed under the FFP License unless explicitly agreed otherwise in writing.

### Can I contribute code under a different license?

Only if the project maintainer explicitly agrees in writing. Otherwise, contributions are assumed to be under the FFP License.

## Versioning Questions

### What changed in v2.0?

FFP License v2.0 introduced the following improvements over v1.0:

- **Stronger definitions**: Added `Legal Entity`, `Source Form`, `Object Form`, and
  `Effective Date` for greater precision.
- **AI/ML Clause** (Section 4.5): Explicit permission to use the Work as training data.
- **Indemnification** (Section 11): Contributors are protected by an indemnification clause.
- **Export Controls** (Section 12): Users are informed of export compliance obligations.
- **Entire Agreement** (Section 15): Prevents parol-evidence disputes.
- **Version Upgrade Path** (Section 16): "v2.0 or later" is now formally supported.
- **Governing Law** (Section 17): International default with arbitration preference.
- **Stronger liability caps**: Jurisdictional carve-outs for warranty and liability disclaimers.
- **Patent clause broadened**: Now covers patent litigation threats, not just filed suits.

### What version of FFP should I use?

Currently, only **Version 2.0** of the FFP License is the current stable release. Use this version for new projects. Version 1.0 is superseded.

### Can I upgrade to a newer version later?

Yes, as the original licensor, you can:
- Re-license your work under a newer FFP version
- Specify "FFP v2.0 or later" to allow users to choose (this is now explicitly supported by
  Section 16 of the FFP License v2.0)

However, you cannot unilaterally upgrade others' contributions without their permission.
Contributors who submitted under v2.0 have granted rights under v2.0 terms.

## Special Use Cases

### Can I use the FFP License for hardware designs?

**Partially.** The FFP License addresses hardware design files in Section 4.4, stating that it grants rights only to the extent that copyright law recognizes rights in design files. For patents and other protections, see Section 3.

### Can I use the FFP License for documentation or artwork?

**Yes!** The FFP License explicitly covers:
- Software
- Documentation
- Art and media
- Data
- Hardware design files
- Other copyrightable works

### Can I use the FFP License for databases?

**Yes**, to the extent that databases are protected by copyright. However:
- Database rights vary by jurisdiction
- Consider if a specialized data license might be more appropriate
- The FFP License may not cover all database-specific rights

## Getting Help

### Where can I get more information?

- **Official Website**: https://druvx13.github.io/FFP/
- **GitHub Repository**: https://github.com/druvx13/FFP
- **License Text**: [LICENSE](LICENSE)
- **Comparison Guide**: [COMPARISON.md](COMPARISON.md)

### Who can I contact with questions?

For questions about the FFP License:
- Open an issue on the [GitHub repository](https://github.com/druvx13/FFP/issues)
- Start a discussion in [GitHub Discussions](https://github.com/druvx13/FFP/discussions)
- Review the full license text and other documentation in this repository

### How can I contribute to the FFP License project?

See our [CONTRIBUTING.md](CONTRIBUTING.md) guide for information on:
- Reporting issues
- Suggesting improvements
- Contributing documentation
- Participating in discussions

