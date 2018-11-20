﻿using System;
using NBitcoin;

namespace Blockhub.Wallet
{
    /// TODO: This should really be pulled out of the Nethereum Implementation so that we can re-use it for
    ///       other wallets in the future without this set of depedencies.

    /// <summary>
    /// Generates a Mnemonic Phrase indepedently of the wallet implementation.
    /// </summary>
    public class Bip39SeedGenerate : ISeedGenerate<string>
    {
        private Wordlist WordList { get; }
        private WordCount WordCount { get; }

        public Bip39SeedGenerate(Wordlist wordList, WordCount wordCount)
        {
            if (wordList == null) throw new ArgumentNullException(nameof(wordList));
            if (!Enum.IsDefined(typeof(WordCount), wordCount)) throw new ArgumentOutOfRangeException(nameof(wordCount));
            
            WordList = wordList;
            WordCount = wordCount;
        }

        public string Generate()
        {
            var mnemonic = new Mnemonic(WordList, WordCount);
            return string.Join(" ", mnemonic.Words);
        }
    }
}
