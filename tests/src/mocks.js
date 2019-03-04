// We have to mock the crypto library here for stable results
import crypto from 'crypto';

crypto.randomBytes = () => 'mocked-crypto';
